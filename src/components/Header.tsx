import React from 'react'
import style from "../css/Header.module.css"
import usaLogo from "../img/eua.png"
import brlLogo from "../img/brasil.png"
import { NavLink } from 'react-router-dom'

type Props = {
  pathName: string
}

export default function Header({pathName}: Props) {

  return (
    <header className={style.header}>
        <NavLink to="/">
          <h1>Tony's Conversions {pathName? <>-</> : <></>} {pathName}</h1>
        </NavLink>
        <nav>
            <ul>
                <li><img src={usaLogo} alt='USA' className={style.flag}/>En</li>
                <li><img src={brlLogo} alt='BRL' className={style.flag}/>Pt</li>
            </ul>
        </nav>
    </header>
    
  )
}