import React from 'react'
import style from "../css/Converting.module.css"
import {  useParams } from 'react-router-dom'
import useConversion from '../hooks/useConversion'
import { UserContext } from '../UserContext'


export default function Converting() {
  type Label = {
    [key:string]:string
  }
  type Options = {
    label: Label,
    symbol: string,
    id: number
  }

  const { typeOfConversion } = useParams()
  const {languageStorage} = React.useContext(UserContext)

  let options: Options[] = []

  const [option1, setOption1] = React.useState('1')  
  const [option2, setOption2] = React.useState('2') 
  const [value1, setValue1] = React.useState(0)
  let value2 = useConversion(typeOfConversion, option1, option2,  value1)
  
  if (typeOfConversion === "speed"){
    options = [
      {
        label: {en: "Miles per hour", pt: "Milhas por hora"},
        symbol: "(mi/h)",
        id: 1
      },
      {
        label: {en: "Meters per second ", pt: "Metros por segundo"},
        symbol: "(m/s)",
        id: 2
      },
      {
        label: {en: "Kilometers per hour", pt:"Quilometros por hora"},
        symbol: "(Km/h)",
        id: 3
      },
      {
        label: {en: "Knot", pt: "Nó"},
        symbol: "(Nm)",
        id: 4
      },     
    ]
  }
  else if (typeOfConversion === "weight"){
    options = [
      {
        label: {en:"Pound", pt:"Libra"},
        symbol: "(lb)",
        id: 1
      },   
      {
        label: {en:"Ounce", pt:"Onça"},
        symbol: "(oz)",
        id: 2
      },   
      {
        label: {en:"Kilogram", pt:"Quilograma"},
        symbol: "(kg)",
        id: 3
      },   
      {
        label: {en:"gram", pt:"grama"},
        symbol: "(g)",
        id: 4
      },   
    ]
  }
  else if (typeOfConversion === "temperature"){
    options = [
      {
        label: {en: "Fahrenheit", pt:"Fahrenheit"},
        symbol: "(ºF)",
        id: 1
      },   
      {
        label: {en: "Celsius", pt:"Celsius"},
        symbol: "(ºC)",
        id: 2
      },   
      {
        label: {en: "Kelvin", pt:"Kelvin"},
        symbol: "(K)",
        id: 3
      },    
    ]
  }
  
  const [symbol1, setSymbol1] = React.useState(options[Number(option1) -1].symbol)  
  const [symbol2, setSymbol2] = React.useState(options[Number(option2) -1].symbol) 
  
  function handleOptionChange(e: any) {
    if (e.id === "option2") {
      const previousOption : string= option2
      setOption2(e.value)
      setSymbol2(options[e.value -1].symbol)
      if (e.value === option1) {
        setOption1(previousOption)
        setSymbol1(options[Number(previousOption)-1].symbol)
      }
    } 
    if (e.id === "option1") {
      const previousOption : string= option1
      setOption1(e.value)
      setSymbol1(options[e.value-1].symbol)
      if (e.value === option2) {
        setOption2(previousOption)
        setSymbol2(options[Number(previousOption)-1].symbol)
      }
    } 
  }

  return (
    <div>
      <ul className={style.ul}>
        <li className={style.li}>
          <p><input type="number" onChange={(e)=> setValue1(Number(e.target.value))} value={value1}/></p>
          <div>
            {value1}
            <p>{symbol1}</p>
          </div>
          <select id='option1' value={option1} onChange={(e)=>handleOptionChange(e.target)} className={style.select}>
              {options.map((opt)=> 
                <option value={opt.id} key={opt.id}>
                  {`${opt.label[languageStorage as keyof Label]} ${opt.symbol}`}
                </option>)
              }              
          </select>
        </li>
        <li className={style.equal}><p>~</p>=</li>
        <li className={style.li}>
          <p></p>
          <div>
            {value2}
            <p>{symbol2}</p>
          </div>
          <select id='option2' value={option2} onChange={(e)=>handleOptionChange(e.target)} className={style.select}>
              {options.map((opt)=> 
                <option value={opt.id} key={opt.id}>
                  {`${opt.label[languageStorage as keyof Label]} ${opt.symbol}`}
                </option>)
              }             
          </select>
        </li>
      </ul>
    </div>
  )
}