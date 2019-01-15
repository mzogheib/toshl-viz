import React from 'react'
import './style.scss'
import Header from '../components/Header'
import Summary from '../components/Summary'
import Charts from '../components/Charts'

const App = () => (
  <div className="app">
    <Header />
    <Summary />
    <Charts />
  </div>
)

export default App
