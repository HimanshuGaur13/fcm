import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/model.css';

const Blog = () => {
    const[data,setData] = useState({title:'', body:''});
    
const chng = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log("data",data)
}

    const sub =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7400/fcm',data).then((res)=>{
            console.log( "data" ,res.data.data.storeData)

        }).catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div className='container mt-5 py-10'>
        <form onSubmit={sub} className='form'>
        <label>Title:</label>
        <input className='title' type="text" name="title" value={data.title} onChange={chng} />
        <label>Body:</label>
        <input className='body' type="message" name="body" value={data.body} onChange={chng} />
        <button className='blg-btn' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Blog