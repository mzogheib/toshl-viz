import React from 'react'
import PropTypes from 'prop-types'
import { arc } from 'd3'

const Slice = ({ params, colors }) => {
  const slice = arc()(params)
  return <path d={slice} fill={colors.pieFill} stroke={colors.pieStroke} />
}

export default Slice

Slice.propTypes = {
  params: PropTypes.object.isRequired,
  colors: PropTypes.object.isRequired,
}
