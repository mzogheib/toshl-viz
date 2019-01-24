import React, { Component } from 'react'
import './style.scss'
import DatePicker from '../components/DatePicker'
import InputForm from '../components/InputForm'
import Summary from '../components/Summary'
import Charts from '../components/Charts'

const randomNumber = () => Math.floor(Math.random() * 1000)

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      categories: {},
      apiToken: '',
    }
    this.incrementMonth = this.incrementMonth.bind(this)
    this.decrementMonth = this.decrementMonth.bind(this)
    this.setToken = this.setToken.bind(this)
  }

  setToken(value) {
    if (!value || value === this.state.apiToken) {
      return
    }
    this.setState({ apiToken: value }, this.fetchData)
  }

  fetchData() {
    this.setState({
      categories: {
        Groceries: randomNumber(),
        'Eating Out': randomNumber(),
        'Health & Fitness': randomNumber(),
        Bills: randomNumber(),
        'Leisure & Recreation': randomNumber(),
        Misc: randomNumber(),
        Transport: randomNumber(),
      },
    })
  }

  incrementMonth() {
    const { date } = this.state
    this.setState(
      {
        date: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
      },
      this.fetchData
    )
  }

  decrementMonth() {
    const { date } = this.state
    this.setState(
      {
        date: new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()),
      },
      this.fetchData
    )
  }

  render() {
    const { date, categories } = this.state
    const totalSpend = Object.values(categories).reduce((a, b) => a + b, 0)
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__header-left">
            <DatePicker
              date={date}
              onPrevDate={this.decrementMonth}
              onNextDate={this.incrementMonth}
            />
          </div>
          <InputForm onSubmit={this.setToken} />
        </div>
        <Summary totalSpend={totalSpend} />
        <Charts data={categories} />
      </div>
    )
  }
}

export default App
