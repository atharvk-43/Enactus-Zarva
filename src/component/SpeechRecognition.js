import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Mic, MicOff, Download } from 'lucide-react';

const SpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordings, setRecordings] = useState([]);
  
  const recognitionRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);


  const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'ja-JP', name: 'Japanese' }
  ];

  const createSpeechRecognition = useCallback(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = selectedLanguage;
      return recognition;
    }
    return null;
  }, [selectedLanguage]);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition is not supported in your browser.');
    }

    // Cleanup function to stop all tracks when component unmounts
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line
  }, []);

  const downloadAudio = useCallback((audioBlob, index) => {
    const url = URL.createObjectURL(audioBlob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `recording_${index + 1}.webm`; // Change extension to .webm
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      // Reset chunks at the start of recording
      chunksRef.current = [];
      
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        // Create blob from collected chunks
        const audioBlob = new Blob(chunksRef.current, { 
          type: 'audio/webm' // Change to webm format which is more commonly supported
        });
        const url = URL.createObjectURL(audioBlob);
        
        const timestamp = new Date().toLocaleString();
        const newIndex = recordings.length;
        
        setRecordings(prev => [...prev, {
          url,
          blob: audioBlob,
          timestamp,
          transcript: finalTranscript,
          language: selectedLanguage
        }]);

        // Automatically download
        downloadAudio(audioBlob, newIndex);
      };

      recorder.start(1000); // Record in 1-second chunks
    } catch (err) {
      setError('Error accessing microphone: ' + err.message);
    }
  };

  const stopRecording = useCallback(() => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    
    // Stop all tracks in the stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, [mediaRecorder]);

  const startListening = useCallback(async () => {
    setError('');
    const recognition = createSpeechRecognition();
    if (!recognition) return;

    recognitionRef.current = recognition;
    await startRecording();

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onerror = (event) => {
      setError(`Error occurred: ${event.error}`);
      setIsListening(false);
      stopRecording();
    };

    recognition.onend = () => {
      setIsListening(false);
      stopRecording();
    };

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      setFinalTranscript((prev) => prev + final);
      setInterimTranscript(interim);
    };

    recognition.start();
  }, [createSpeechRecognition, stopRecording]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    stopRecording();
    setIsListening(false);
  }, [stopRecording]);

  const clearTranscript = useCallback(() => {
    setFinalTranscript('');
    setInterimTranscript('');

    
    // Clean up old recordings
    recordings.forEach(recording => {
      URL.revokeObjectURL(recording.url);
    });
    setRecordings([]);
  }, [recordings]);

  // Manual download handler for the download buttons
  const handleDownload = useCallback((recording, index) => {
    if (recording.blob) {
      downloadAudio(recording.blob, index);
    }
  }, [downloadAudio]);

  // Cleanup URLs when component unmounts
  useEffect(() => {
    return () => {
      recordings.forEach(recording => {
        URL.revokeObjectURL(recording.url);
      });
    };
    // eslint-disable-next-line
  }, [recordings]);

  // Rest of the JSX remains the same, but update the download button handler
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="language" className="font-medium">
            Select Language:
          </label>
          <select
            id="language"
            className="p-2 border rounded-md"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={isListening ? stopListening : startListening}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              isListening
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {isListening ? (
              <>
                <MicOff className="h-5 w-5" /> Stop
              </>
            ) : (
              <>
                <Mic className="h-5 w-5" /> Start
              </>
            )}
          </button>
          <button
            onClick={clearTranscript}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
          >
            Clear
          </button>
        </div>

        {isListening && (
          <div className="text-green-600 flex items-center gap-2">
            <Mic className="h-4 w-4 animate-pulse" />
            Listening...
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-md min-h-[100px]">
            <h3 className="font-medium mb-2">Final Transcript:</h3>
            <p className="whitespace-pre-wrap">{finalTranscript}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md min-h-[50px]">
            <h3 className="font-medium mb-2">Interim Transcript:</h3>
            <p className="text-gray-600 italic">{interimTranscript}</p>
          </div>
        </div>

        {recordings.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-medium">Saved Recordings:</h3>
            {recordings.map((recording, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {recording.timestamp} ({languages.find(l => l.code === recording.language)?.name})
                  </span>
                  <button
                    onClick={() => handleDownload(recording, index)}
                    className="flex items-center gap-2 px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm transition-colors"
                  >
                    <Download className="h-4 w-4" /> Download
                  </button>
                </div>
                <audio controls src={recording.url} className="w-full mb-2" />
                {recording.transcript && (
                  <div className="text-sm text-gray-700">
                    <strong>Transcript:</strong> {recording.transcript}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeechRecognition;