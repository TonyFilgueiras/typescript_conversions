import React from 'react'
import style from "../css/Header.module.css"
import usaLogo from "../img/eua.png"
import brlLogo from "../img/brasil.png"
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../UserContext'



export default function Header() {
  const [pathname, setPathname] = React.useState("")
  const location = useLocation()

  const {languageStorage, setLanguageStorage}= React.useContext(UserContext)


  interface PathnameTitle {
    [key: string]: {[key:string]: string}
  }

  const pathnameTitle : PathnameTitle={
    speed: {en: "Speed", pt: "Velocidade"},
    temperature: {en: "Temperature", pt: "Temperatura"},
    weight: {en: "Weight", pt: "Peso"}, 
  }


  React.useEffect(() => {
    setPathname(location.pathname.replace("/", ""))
  },[location]);

  return (
    <header className={style.header}>
        <NavLink to="/">
          <h1>Tony's Conversions {pathname? <>- {pathnameTitle[pathname as keyof PathnameTitle][languageStorage as keyof PathnameTitle]}</>: null}</h1>
        </NavLink>
        <nav>
            <ul>
                <li onClick={()=>setLanguageStorage("en")}><img src={usaLogo} alt='USA' className={style.flag}/>En</li>
                <li onClick={()=>setLanguageStorage("pt")}><img src={brlLogo} alt='BRL' className={style.flag}/>Pt</li>
            </ul>
        </nav>
    </header>
    
  )
}