import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Posts from './components/Posts'

class App extends Component {
  state = {
    posts: [
      { id: 1001, title: 'REACTionary', body: 'Respond rather than React.'},
      { id: 1002, title: 'ANGULAR Momentum', body: 'Forward acceleration over instantaneous velocity.'},
      { id: 1003, title: 'Change My VUE', body: 'Attraction not promotion.'},
      { id: 1004, title: 'From the EMBERs', body: 'Rise from the ashes anew.'},
      { id: 1005, title: 'You\'re Looking SVELTE', body: 'Be kind to yourself.'},
    ]
  }
  render() {
    return (
      <div className='App'>
        <NavBar />
        <main className='container mt-5 pt-3'>
          <Posts 
            posts={this.state.posts}
          />
        </main>
      </div>
    )
  }
}

export default App
