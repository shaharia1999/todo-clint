
import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Todo.css'


const Todo = () => {
    const handleevent=(e)=>{
        e.preventDefault();
        // const name=event.target[0].value;
        const name=e.target[0].value;
        const data={name};
        console.log(data);
        fetch('https://friendly-inukshuk-44622.herokuapp.com/task', {
  method: 'POST',
  body: JSON.stringify(data
  ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
 e.target.reset();

    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://friendly-inukshuk-44622.herokuapp.com/task')
        .then(res=>res.json())
        .then(data=>setData(data));
      

    },[data]);
  
    const deleteItem=(_id)=>{
      const object=data.find(d=>d._id ===_id);
      console.log(object);
      if(object){
        fetch('https://friendly-inukshuk-44622.herokuapp.com/complete', {
          method: 'POST',
          body: JSON.stringify(object
          ),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then(json=>{
               update(_id);
          });
      }
      
    }

const update=(_id)=>{
  console.log(_id)
   const url=`https://friendly-inukshuk-44622.herokuapp.com/task/${_id}`
  fetch(url,{
  method: 'DELETE',
      })
  .then(res=>res.json())
  .then(datas=>{
  const remaining=data.filter(d=>d._id !==_id);
  setData(remaining);
})
   
 }
    return (
        <div className='todo'>
            <form onSubmit={handleevent} className='form'>
                <input type="text" name="name" />
                <input type="submit" value=" ADD" />
            </form>
            {
               data.map(data=>
               <div className='d-flex form-div' >
                   <input type="checkbox" name="" id="" onClick={()=>deleteItem(data._id)} />
                   <p>{data.name}</p>
                   <p className='update'><Link to={`todo/${data._id}`}>Update</Link></p>
                   <p className='update' onClick={()=>update(data._id)}>Delete</p>
               </div>
               )
            }
        </div>
       
    );
    }

export default Todo;