import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}