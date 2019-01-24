import React from 'react'
import PropTypes from 'prop-types'
import { pie, arc, interpolateRgb, ascending } from 'd3'

const makeArc = arc()
  .innerRadius(0)
  .outerRadius(150)
const interpolate = interpolateRgb('#C1BCAC', '#214E34')

const Slice = ({ segment, color }) => <path d={makeArc(segment)} fill={color} />

const Pie = ({ data }) => {
  const height = 400
  const width = 400
  const pieSlices = pie()
    .sort(ascending)(data)
    .map(segment => {
      const color = interpolate(segment.index / (data.length - 1))
      return <Slice key={segment.index} segment={segment} color={color} />
    })

  return (
    <div>
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>{pieSlices}</g>
      </svg>
    </div>
  )
}

export default Pie

Pie.propTypes = {
  data: PropTypes.array,
}

Slice.propTypes = {
  segment: PropTypes.object,
  color: PropTypes.string,
}
