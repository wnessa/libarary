import React, {useState} from 'react';
import data_product from '../Assets/data';
import { Item } from '../Item/Item';
import './Home.css';
import { FaBuildingFlag } from "react-icons/fa6";




export const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
          <h3>Welcome To VaNBooks</h3>
          <FaBuildingFlag className='van'/>
        </div>
        <div className="container">
            <h2>Find the Book You hava been looking for</h2>
            <div className="menu-item">
              {data_product.map((item,i)=>{
                      return <Item className='item' key={i} id={item.id} title={item.title} image={item.image} author={item.author} decsription={item.description}/>
                  })}
            </div>
        </div>
    </div>
  )
}
