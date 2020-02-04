import React from 'react'

const Result = (props) => { 
 let content = null

 const { city, date, temp, pressure, error} = props.data

if (!error && city) { 
     const sunriseTime = new Date(props.data.sunrise * 1000).toLocaleTimeString()
     const sunsetTime = new Date(props.data.sunset * 1000).toLocaleTimeString()
    content = (
        <div>
        <h1>city:  {city}</h1>
        <h1>current time and date: {date}</h1>
        <h1>temperature:  {temp} &#176; C</h1>
        <h1>sunrise: {sunriseTime}</h1>
        <h1>sunset: {sunsetTime}</h1>
        <h1>preassure: {pressure} hPa</h1>
        </div>
    )
 }
    return ( 
        <div>
            {error ? `nie mamy w bazie ${city}` : content}
         </div>
    )
}

export default Result