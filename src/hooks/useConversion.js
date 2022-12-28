import React from 'react'

export default function useConversion(typeOfConversion,option1,option2,value1) {
  const [value2, setValue2] = React.useState()
  React.useEffect(()=>{
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
        default:
          break
      }
  },[value1,option1,option2, typeOfConversion])

  return (
    value2
  )
}
