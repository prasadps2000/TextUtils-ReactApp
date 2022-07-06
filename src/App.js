import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useEffect, useState } from "react";
import Alert from './components/Alert';
import axios from 'axios';
import {AxiosResponse} from "axios";
// import {

//   BrowserRouter,

//   Routes,

//   Route,

// } from "react-router-dom";




function App() {

  useEffect(()=>{
    axios.get('https://localhost:7119/WeatherForecast')
      .then((response:AxiosResponse<any>)=>{
        console.log(response.data);
      })
  },[])
  const[mode,setMode]=useState('light');//wheteher dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode=='light'){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success ");
      document.title='Textutils-Dark Mode';
      // setInterval(() => {
      //   document.title='Textutils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install Textutils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success ");
      document.title='Textutils-Light Mode';
    }
    
  }
  return (
     
    <>
    {/* <BrowserRouter> */}

{/* <Navbar title="TextUtils" aboutText="Aboutus"/>*/}

    <Navbar title="TextUtils" about="About me" mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>

  

    <div className='container my-3'>



   
{/* 
        <Routes>

          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> } />

          <Route path="/about" element={<About/>} />

        </Routes> */}

    {/* <Switch> old version of routing

      <Route path="/about">

        <About/>

      </Route>

      <Route path="/">

        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>

      </Route>

    </Switch> */}

    </div>

{/* </BrowserRouter> */}

</>
    
  );
}

export default App;
