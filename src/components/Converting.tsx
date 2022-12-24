import React from 'react'
import style from "../css/Converting.module.css"
import {  useParams } from 'react-router-dom'


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
  const [value2, setValue2] = React.useState(0)

  
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
  
  
  React.useEffect(() => {
    function calculateConversion(){
      switch (typeOfConversion) {
        case 'speed' :
          if (option1 === '1' && option2 === '2') {
            setValue2(Math.round(value1 / 2.237 * 100) / 100)
          }
          else if (option1 === '3' && option2 === '2') {
            setValue2(Math.round(value1 / 3.6 * 100) / 100)
          }
          else if (option1 === '4' && option2 === '2') {
            setValue2(Math.round(value1 / 1.944 * 100) / 100)
          }
          else if (option1 === '2' && option2 === '1') {
            setValue2(Math.round(value1 * 2.237 * 100) / 100)
          }
          else if (option1 === '3' && option2 === '1') {
            setValue2(Math.round(value1 / 1.609 * 100) / 100)
          }
          else if (option1 === '4' && option2 === '1') {
            setValue2(Math.round(value1 * 1.151 * 100) /100)
          }
          else if (option1 === '2' && option2 === '3') {
            setValue2(Math.round(value1 * 3.6 * 100) / 100)
          }
          else if (option1 === '1' && option2 === '3') {
            setValue2(Math.round(value1 * 1.609 * 100) / 100)
          }
          else if (option1 === '4' && option2 === '3') {
            setValue2(Math.round(value1 * 1.852 * 100) / 100)
          }
          else if (option1 === '1' && option2 === '4') {
            setValue2(Math.round(value1 / 1.151 * 100) / 100)
          }
          else if (option1 === '2' && option2 === '4') {
            setValue2(Math.round(value1 * 1.944 * 100) / 100)
          }
          else if (option1 === '3' && option2 === '4') {
            setValue2(Math.round(value1 / 1.852 * 100) / 100)
          }
          break
        case "temperature":
          if (option1 === '1' && option2 === '2') {
            setValue2(Math.round((value1 - 32) / 1.8 * 100) / 100)
          }
          else if (option1 === '1' && option2 === '3') {
            setValue2(Math.round(((value1 - 32) / 1.8 + 273.15) * 100) / 100)
          }
          else if (option1 === '2' && option2 === '3') {
            setValue2(value1 + 273.15)
          }
          else if (option1 === '3' && option2 === '2') {
            setValue2(Math.round((value1 - 273.15) * 100) / 100)
          }
          else if (option1 === '2' && option2 === '1') {
            setValue2(Math.round(((value1 * (9/5)) + 32) * 100) /100)
          }
          else if (option1 === '3' && option2 === '1') {
            setValue2(Math.round((((value1 - 273.15) * (9/5)) + 32) * 100) /100)
          }
          break
        case "weight":
          if (option1 === '2' && option2 === '1') {
            setValue2(Math.round(value1 / 16 * 100) / 100)
          }
          else if (option1 === '3' && option2 === '1') {
            setValue2(Math.round(value1 * 2.205 * 100) / 100)
          }
          else if (option1 === '4' && option2 === '1') {
            setValue2(Math.round(value1 / 453.6 * 100) / 100)
          }
          else if (option1 === '1' && option2 === '2') {
            setValue2(Math.round(value1 * 16 * 100) / 100)
          }
          else if (option1 === '3' && option2 === '2') {
            setValue2(Math.round(value1 * 35.274 * 100) / 100)
          }
          else if (option1 === '4' && option2 === '2') {
            setValue2(Math.round(value1 / 28.35 * 100) / 100)
          }
          else if (option1 === '1' && option2 === '3') {
            setValue2(Math.round(value1 / 2.205 * 100) / 100)
          }
          else if (option1 === '2' && option2 === '3') {
            setValue2(Math.round(value1 / 35.274 * 100) / 100)
          }
          else if (option1 === '4' && option2 === '3') {
            setValue2(Math.round(value1 / 1000 * 100) / 100)
          }
          else if (option1 === '1' && option2 === '4') {
            setValue2(Math.round(value1 * 453.6 * 100) / 100)
          }
          else if (option1 === '2' && option2 === '4') {
            setValue2(Math.round(value1 * 28.35 * 100) / 100)
          }
          else if (option1 === '3' && option2 === '4') {
            setValue2(Math.round(value1 * 1000 * 100) / 100)
          }
          break 
        }
    }
    calculateConversion()
  }, [value1, value2,option1,option2, typeOfConversion])

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
          <p><input type="number" onChange={(e)=> setValue2(Number(e.target.value))} value={value2}/></p>
          <div>{value2}</div>
          <select id='option2' value={option2} onChange={(e)=>handleOptionChange(e.target)} className={style.select}>
              {options.map((opt)=> <option value={opt.id} key={opt.id}>{opt.label}</option>)}             
          </select>
        </li>
      </ul>
    </div>
  )
}