import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Helmet } from 'react-helmet'
import favicon from './favicon.png'

const Head = () => (
  <Helmet>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" type="image/png" href={favicon} />
    <link rel="apple-touch-icon" href={favicon} />
    <title>React from Scratch</title>
  </Helmet>
)

const Root = () => (
  <div>
    <Head />
    <App />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('root'))
