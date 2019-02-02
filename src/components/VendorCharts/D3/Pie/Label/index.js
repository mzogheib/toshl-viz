import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ centroid, label, color }) => {
  const [x, y] = centroid
  const labelTransform = `translate(${x}, ${y})`
  return (
    <text transform={labelTransform} fill={color}>
      {label}
    </text>
  )
}

export default Label

Label.propTypes = {
  centroid: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
