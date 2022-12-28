import React from 'react'
import style from "../css/Converting.module.css"
import {  useParams } from 'react-router-dom'
import useConversion from '../hooks/useConversion'


// type Props = {
//     texto?: string
// }


export default function Converting() {
  
  type Options = {
    label: string,
    id: number
  }

  const { typeOfConversion } = useParams()

  let options: Options[] = []

  const [option1, setOption1] = React.useState('1')  
  const [option2, setOption2] = React.useState('2')  
  const [value1, setValue1] = React.useState(0)
  let value2 = useConversion(typeOfConversion, option1, option2,  value1)
  
  if (typeOfConversion === "speed"){
    options = [
      {
        label: "Miles per hour (mi/h)",
        id: 1
      },
      {
        label: "Meters per second (m/s)",
        id: 2
      },
      {
        label: "Kilometers per hour (Km/h)",
        id: 3
      },
      {
        label: "Knot (Nm)",
        id: 4
      },     
    ]
  }
  else if (typeOfConversion === "weight"){
    options = [
      {
        label: "Pound (lb)",
        id: 1
      },   
      {
        label: "Ounce (oz)",
        id: 2
      },   
      {
        label: "Kilogram (kg)",
        id: 3
      },   
      {
        label: "gram (g)",
        id: 4
      },   
    ]
  }
  else if (typeOfConversion === "temperature"){
    options = [
      {
        label: "Fahrenheit (ºF)",
        id: 1
      },   
      {
        label: "Celsius (ºC)",
        id: 2
      },   
      {
        label: "Kelvin (K)",
        id: 3
      },    
    ]
  }
  
  function handleOptionChange(e: any) {
    if (e.id === "option2") {
      const previousOption : string= option2
      setOption2(e.value)
      if (e.value === option1) {
        setOption1(previousOption)
      }
    } 
    if (e.id === "option1") {
      const previousOption : string= option1
      setOption1(e.value)
      if (e.value === option2) {
        setOption2(previousOption)
      }
    } 
  }

  return (
    <div>
      <ul className={style.ul}>
        <li className={style.li}>
          <p><input type="number" onChange={(e)=> setValue1(Number(e.target.value))} value={value1}/></p>
          <div>{value1}</div>
          <select id='option1' value={option1} onChange={(e)=>handleOptionChange(e.target)} className={style.select}>
              {options.map((opt)=> <option value={opt.id} key={opt.id}>{opt.label}</option>)}              
          </select>
        </li>
        <li className={style.equal}><p>~</p>=</li>
        <li className={style.li}>
          <p></p>
          <div>{value2}</div>
          <select id='option2' value={option2} onChange={(e)=>handleOptionChange(e.target)} className={style.select}>
              {options.map((opt)=> <option value={opt.id} key={opt.id}>{opt.label}</option>)}             
          </select>
        </li>
      </ul>
    </div>
  )
}