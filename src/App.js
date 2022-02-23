import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Posts from './components/Posts'

class App extends Component {
  state = {
    posts: [
      { id: 1001, date: new Date('May 29, 2013'), title: 'REACTionary', body: 'Respond rather than React.'},
      { id: 1002, date: new Date('September 14, 2016'), title: 'ANGULAR Momentum', body: 'Forward acceleration over instantaneous velocity.'},
      { id: 1003, date: new Date('February 11, 2014'), title: 'Change My VUE', body: 'Attraction not promotion.'},
      { id: 1004, date: new Date('December 8, 2011'), title: 'From the EMBERs', body: 'Rise from the ashes anew.'},
      { id: 1005, date: new Date('November 26, 2016'), title: 'You\'re Looking SVELTE', body: 'Be kind to yourself.'},
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
