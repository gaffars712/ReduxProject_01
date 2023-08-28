import React from 'react';
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { remove } from '../Store/Cartsilice';


const Card = () => {
  const items = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handelremove = (id) =>{
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
       {items.map((ele)=>{
        return(
          <div key={ele.id} className='cartCard'>
            <img src={ele.image}></img>
            <h5>{ele.title }</h5>
            <h5>{ele.price}</h5>
            <button onClick={()=>handelremove(ele.id)}  className='btn'> Remove   </button>
          </div>
        )
       })}

      </div>
    </div>
  )
}

export default Card;
