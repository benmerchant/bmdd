import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Posts from './components/Posts'

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className='App'>
        <NavBar />
        <main className='container mt-5 pt-3'>
          <Posts />
        </main>
      </div>
    )
  }
}

export default App
