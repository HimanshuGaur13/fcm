import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4500/api/getData').then((response) => {
      console.log(response.data)
      setData(response.data)
    })

  },[]);
 const  deleteRow = (id)=>{  
  // console.log("id",id)
    axios.delete(`http://localhost:4500/api/delete/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const val = data.filter(item => item._id !== id);  
        setData(val);  
      }) 
    } 

  
  if (!data) return (
    <div>
      <p>Sorry No Data Found
      </p>
    </div>
  )

  return (
    
    <div>
    
        <div>
          <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                
              </tr>
            </thead>
            <tbody>
            
            {data.map((item)=>{
              return(
              <tr>
                <th scope="row">*</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td> <Link  key={item._id} to={`/Edit/${item._id}`} className="block relative  rounded overflow-hidden">
                <button className='read-btn' type='submit' >Edit</button></Link></td>
                                        
                                  
                <td><button className='read-btn' type='submit' onClick={()=>deleteRow(item._id)}>Delete</button></td>
              </tr>
                )})}
            </tbody>
          </table>
          </div>
        </div>

    </div>
  )
}

export default Read