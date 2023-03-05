import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../CSS/model.css';
import {useFormik} from 'formik';
import { useParams } from 'react-router-dom';

const Edit = () => {
    let{ id } = useParams();
    console.log(id)
    const [val, setVal] = useState([]);
  
    useEffect(() => {

      axios.get(`http://localhost:7400/fcm/${id}`).then((response) => {
          setVal(response.data)

      })

  },[id])


  console.log(val)
 

    const formik = useFormik({
        initialValues: {
          title: val.title,
          body: val.body,
        },
    
  onSubmit: values => {
       
         axios.patch(`http://localhost:7400/fcm/${id}`,values).then((res)=>{
            console.log(res)
            
        }).catch((error)=>{
            console.log(error)
        })

    }
});

  return (
    
        <form onSubmit={formik.handleSubmit}className='form'>
        <div className='container mt-5 py-10'>
        <label>Title:</label>
        <input className='title' id="title"
         name="title"
         type="text" onChange={formik.handleChange}
         value={formik.values.title} />
        <label>Body:</label>
        <input className='bdy' id="body"
         name="body"
         type="text" onChange={formik.handleChange}
         value={formik.values.body}/>
        <button className='blg-btn' type="submit">Submit</button>
        </div>
        </form>
    
  )
}

export default Edit;