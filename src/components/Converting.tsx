import React from 'react'

// type Props = {
//     texto?: string
// }


export default function Converting() {
  let options: string[] = []
  let texto: string = ''
  
  const pathName: string = window.location.pathname.replace("/", "")
  if (pathName === "speed"){
    options = [
      "Miles per hour (mi/h)",
      "Meters per second (m/s)",
      "Kilometers per hour (Km/h)",
      "Knot (Nm)"
    ]
    texto = "velociade"
  }
  else if (pathName === "weight"){
    options = [
      "Pound (lb)",
      "Ounce (oz)",
      "Kilogram (kg)",
      "gram (g)",
    ]
    texto = "Peso"
  }
  else if (pathName === "temperature"){
    options = [
      "Fahrenheit (ºF)",
      "Celsius (ºC)",
      "Kelvin (K)",
    ]
    texto = "Temperature"
  }

  return (
    <div>
      {texto}
      {options.map((b) => <h1 key={b}>{b}</h1>)}
    </div>
  )
}