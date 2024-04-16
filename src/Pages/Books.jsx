import React, {useState} from 'react'
import products from '../Componets/Assets/Products';
import adventure from '../Componets/Assets/Quotes';
import data from '../Componets/Assets/data';
import { ItemOp } from '../Componets/Item_op/ItemOp';
import '../Componets/Home/Home.css'

export const Books = () => {
  return (
    <div className='Books'>
        <div className="container">
            <h2>All category</h2>
            <div className='menu-item'>
                {products.map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </div>
            <h2>Adventure</h2>
            <div className='menu-item'>
                {adventure.map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </div>
            <h2>Action</h2>
            <div className='menu-item'>
                {data.map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </div>
        </div>
    </div>
  )
}
