import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ centroid, label }) => {
  const [x, y] = centroid
  const labelTransform = `translate(${x}, ${y})`
  return <text transform={labelTransform}>{label}</text>
}

export default Label

Label.propTypes = {
  centroid: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
}
