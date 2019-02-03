import React, { Component } from 'react'
import './style.scss'
import { colors, ColorsContext } from '../contexts/colors'
import DatePicker from '../components/DatePicker'
import InputForm from '../components/InputForm'
import Summary from '../components/Summary'
import Charts from '../components/Charts'
import { sumBy } from '../utils'

const randomNumber = () => Math.floor(Math.random() * 1000)

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      categories: [],
      apiToken: '',
    }
    this.incrementMonth = this.incrementMonth.bind(this)
    this.decrementMonth = this.decrementMonth.bind(this)
    this.setToken = this.setToken.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  setToken(value) {
    if (!value || value === this.state.apiToken) {
      return
    }
    this.setState({ apiToken: value }, this.fetchData)
  }

  fetchData() {
    this.setState({
      categories: [
        { label: 'Groceries', value: randomNumber() },
        { label: 'Eating Out', value: randomNumber() },
        { label: 'Health & Fitness', value: randomNumber() },
        { label: 'Bills', value: randomNumber() },
        { label: 'Leisure & Recreation', value: randomNumber() },
        { label: 'Misc', value: randomNumber() },
        { label: 'Transport', value: randomNumber() },
      ],
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
    const totalSpend = sumBy(categories, 'value')
    const sortedData = categories.sort((a, b) => a.value - b.value)

    return (
      <ColorsContext.Provider value={colors.light}>
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
          <Charts data={sortedData} />
        </div>
      </ColorsContext.Provider>
    )
  }
}

export default App
