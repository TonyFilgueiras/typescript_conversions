import React from 'react'
import style from "../css/HomeView.module.css"
import peso from "../img/peso.svg"
import temp from "../img/temp.png"
import vel from "../img/vel.png"
import { NavLink } from 'react-router-dom'
import { UserContext } from '../UserContext'

type ContainerTitle = {
  [key:string]: string  
}

type Options = {
  containerTitle: ContainerTitle,
  imageSource: any,
  imageAlt: string,
  containerRoute: string
}
const options : Options[] = [
  {
    containerTitle: {en: "Mass Conversion", pt: "Conversão de Massa"},
    imageSource: peso,
    imageAlt: "Weight image",
    containerRoute: "/weight",
  },
  {
    containerTitle: {en: "Temperature Conversion", pt: "Conversão de Temperatura"},
    imageSource: temp,
    imageAlt: "Temperature image",
    containerRoute: "/temperature",
  },
  {
    containerTitle: {en: "Speed Conversion", pt: "Conversão de Velocidade"},
    imageSource: vel,
    imageAlt: "Speed image",
    containerRoute: "/speed",
  },
  

]

export default function HomeView() {

  const{languageStorage}= React.useContext(UserContext)

  return (
    <ul className={style.ul}>
        {options.map((item) => 
          <NavLink to={item.containerRoute} key={item.containerTitle['pt']}>
            <li className={style.li} >
          
              <h1 className={style.h1}>{item.containerTitle[languageStorage as keyof ContainerTitle]}</h1>
              <img src={item.imageSource} alt={item.imageAlt} className={style.image}/>
            </li>
          </NavLink>
        )}
    </ul>
  )
}