import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const DatePicker = ({ date, onPrevDate, onNextDate }) => {
  const dateLabel = new Intl.DateTimeFormat('en-AU', {
    month: 'long',
    year: 'numeric',
  }).format(date)
  return (
    <div className="datePicker">
      <Button label="Prev" onClick={onPrevDate} />
      <span>{dateLabel}</span>
      <Button label="Next" onClick={onNextDate} />
    </div>
  )
}

export default DatePicker

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onPrevDate: PropTypes.func.isRequired,
  onNextDate: PropTypes.func.isRequired,
}
