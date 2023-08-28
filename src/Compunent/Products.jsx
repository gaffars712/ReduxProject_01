import React, { useEffect, useState } from 'react';
import { add } from '../Store/Cartsilice';
import { useDispatch } from 'react-redux';
import { fetchitems } from '../Store/items';

const Products = () => {
    const [products, setproducts] = useState([])
    const dispactch = useDispatch()
    useEffect(()=>{
        const fatchapi = async ()=>{
            const res = await fetch(`https://fakestoreapi.com/products`)
            const Data = await res.json()
            console.log(Data);
            setproducts(Data)
        }
        fatchapi()
    },[])
    const handleadd = (ele) =>{
        dispactch(add(ele))

    }
  return (
    <div className='productsWrapper'>
      {products.map((ele,lnd)=>{
        return(
            <div className='card' key={ele.id}>
                <div >
                <img src={ele.image}></img>
                <h4>{ele.title}</h4>
                <h5>{ele.price}</h5>
                <button onClick={()=>handleadd(ele)} className='btn'> Add To Cart</button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Products
;