import React, { useEffect, useState } from 'react';
import './Complete.css'

const Complete = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://friendly-inukshuk-44622.herokuapp.com/complete')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[]);

    const deleteItem=(_id)=>{
          console.log(_id);
          const url=`https://friendly-inukshuk-44622.herokuapp.com/delete/${_id}`
          fetch(url,{
          method: 'DELETE',
              })
          .then(res=>res.json())
          .then(datas=>{
          const remaining=data.filter(d=>d._id !==_id);
          setData(remaining);
          console.log(datas)
        })
    }
    return (
        <div className='complete'>
           
           {
               data.map(data=><div className='item'><li>{data.name}</li>
               <p onClick={()=>deleteItem(data._id)}> delete</p></div>
                              
               )
            }
            
        </div>
    );
};

export default Complete;