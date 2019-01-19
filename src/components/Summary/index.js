import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Summary = ({ totalSpend }) => {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
  })
  return (
    <div className="summary">Total Spend: {formatter.format(totalSpend)}</div>
  )
}

export default Summary

Summary.propTypes = {
  totalSpend: PropTypes.number,
}
