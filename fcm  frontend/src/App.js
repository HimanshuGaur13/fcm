import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog';
import Read from './Component/Read';
import Navbar from './Component/Navbar';
import Edit from './Component/Edit';
import React,{useEffect} from 'react';
import { fetchToken,onMessageListener } from './Firebase';

function App() {

  console.log(fetchToken())
  onMessageListener();
  // onMessageListener().then(res=>console.log(res));
//   const requestPermission = () =>{
//     console.log('Requesting permission...');
//     Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//         console.log('Notification permission granted.');
//       }
//   })
//   }


//  useEffect(()=>{
//  requestPermission();
//   },[])

  

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Read' element={<Read/>}/>
    <Route path='/Edit/:id' element ={<Edit/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
