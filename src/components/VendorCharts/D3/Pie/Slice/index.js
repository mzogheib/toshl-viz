import React from 'react'
import PropTypes from 'prop-types'
import { arc } from 'd3'

const Slice = ({ params, color }) => {
  const slice = arc()(params)
  return <path d={slice} fill={color} />
}

export default Slice

Slice.propTypes = {
  params: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
}
