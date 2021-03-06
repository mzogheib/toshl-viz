import React from 'react'

export const colors = {
  light: {
    foreground: '#',
    background: '#',
    pieFill: '#FFFFFF',
    pieStroke: '#DE6D1B',
    chartText: '#DE6D1B',
  },
}

export const ColorsContext = React.createContext(
  colors.light // default value
)

export const mapContextToProps = Component => props => (
  <ColorsContext.Consumer>
    {colors => <Component {...props} colors={colors} />}
  </ColorsContext.Consumer>
)
