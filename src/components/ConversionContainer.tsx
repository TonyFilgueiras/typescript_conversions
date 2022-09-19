import React from 'react'
import style from "../css/ConversionContainer.module.css"
import peso from "../img/peso.svg"
import temp from "../img/temp.png"
import vel from "../img/vel.png"
import { NavLink } from 'react-router-dom'

// type Props = {}

const list = [
  {
    containerTitle: "Weight Conversion",
    imageSource: peso,
    imageAlt: "Weight image",
    containerRoute: "/weight",
  },
  {
    containerTitle: "Temperature Conversion",
    imageSource: temp,
    imageAlt: "Temperature image",
    containerRoute: "/temperature",
  },
  {
    containerTitle: "Speed Conversion",
    imageSource: vel,
    imageAlt: "Speed image",
    containerRoute: "/speed",
  },
  

]

export default function ConversionContainer() {
  return (
    <ul className={style.ul}>
        {list.map((item) => 
          <NavLink to={item.containerRoute} key={item.containerTitle}>
            <li className={style.li} >
          
              <h1 className={style.h1}>{item.containerTitle}</h1>
              <img src={item.imageSource} alt={item.imageAlt} className={style.image}/>
            </li>
          </NavLink>
        )}
    </ul>
  )
}