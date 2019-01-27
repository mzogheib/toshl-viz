import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { formatCurrency } from '../../utils'

const Summary = ({ totalSpend }) => {
  return (
    <div className="summary">Total Spend: {formatCurrency(totalSpend)}</div>
  )
}

export default Summary

Summary.propTypes = {
  totalSpend: PropTypes.number,
}
