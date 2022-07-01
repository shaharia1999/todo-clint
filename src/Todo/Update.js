import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Todo.css'

const Update = () => {
   let {_id}=useParams();
  
   const [data,setData]=useState([]);
   const [name,setName]=useState('');
  
    useEffect(()=>{
        fetch('https://friendly-inukshuk-44622.herokuapp.com/task')
        .then(res=>res.json())
        .then(data=>{
            const obj=data.find(d=>d._id ===_id);
            setName(obj)
            setData(data)
        });
       
      
    },[]);
    const handleevent=async(e)=>{
        alert("update sucess");
        e.preventDefault()
         const name=e.target[0].value;
         console.log(name);
         const profile={name}
         const response= await axios.put(`https://friendly-inukshuk-44622.herokuapp.com/update/${_id}`,profile);
         if (response) {
            e.target.reset();}
         }
    
   
    return (
        <div className='todo'>
            <form onSubmit={handleevent}>
                <input type="text" name="name" defaultValue={name.name} />
                <input type="submit" value="Update" />
            </form>
           
            
        </div>
    );
};

export default Update;