import React from 'react'
import style from "../css/Header.module.css"
import usaLogo from "../img/eua.png"
import brlLogo from "../img/brasil.png"
import { NavLink, useLocation } from 'react-router-dom'



export default function Header() {
  const [pathname, setPathname] = React.useState("")
  const location = useLocation()

  React.useEffect(() => {
    setPathname(location.pathname.replace("/", "").charAt(0).toUpperCase() +  location.pathname.replace("/", "").slice(1))
  },[location]);

  return (
    <header className={style.header}>
        <NavLink to="/">
          <h1>Tony's Conversions {pathname? <>-</> : <></>} {pathname}</h1>
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