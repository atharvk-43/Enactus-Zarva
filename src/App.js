import './App.css';
import Home from './component/Home';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import LoginPage from './component/Login';
import SignupPage from './component/Signup';

function App() {

  const [progress,setprogress]=useState(0);

  const showalert=()=>{
    setTimeout(()=>{
      setprogress(20);
    },100)
    setTimeout(()=>{
      setprogress(40);
    },200)
    setTimeout(()=>{
      setprogress(60);
    },300)
    setTimeout(()=>{
      setprogress(80);
    },400)
    setTimeout(()=>{
      setprogress(100);
    },500)
      
  }
  const handleonClick2=()=>{
    showalert();
  }
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><Home showalert={showalert} handleonClick2={handleonClick2}/></>
    },{
      path:"/login",
      element:<><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><LoginPage/></>
    },{
      path:"/signup",
      element:<><LoadingBar
      color='#DED9DF'
      progress={progress}
      /><SignupPage/></>
    }
  ])
 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;