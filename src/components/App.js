import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

class App extends Component {
  state = { 
    value: '',
    date: '', 
    city: '', 
    sunrise: '', 
    sunset: '', 
    temp: '', 
    pressure: '', 
    wind: '', 
    error: false,
  }

handleChange = (e) => { 
  this.setState({
    value: e.target.value
  })
}

handleSubmit = (e) => { 
  e.preventDefault();
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=1d1dd0242ddb5d8b75fbcbe124b6c545&units=metric`

  fetch(API)
  .then(response => { 
    if (response.ok) { 
      return response
    }
    throw Error("coś poszło nie tak")
  })
  .then(response => response.json())
  .then(data => {
    const time = new Date().toLocaleString()
    this.setState({
    date: time,
    city: this.state.value,
    sunrise: data.sys.sunrise,
    sunset:  data.sys.sunset,
    temp:  data.main.temp,
    pressure:   data.main.pressure,
    wind:   data.wind.speed,
    error: false
    })
  })
  .catch(err => {
      this.setState({
      city: this.state.value, 
      error: true
    })
  })}
  
  render() {
    return (
      <>
      <Form value={this.state.value} 
      change={this.handleChange}
      submit={this.handleSubmit}
      />
      <Result data={this.state}/>  
      </>
    )
  }
}

export default App
