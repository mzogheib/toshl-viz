const formatCurrency = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  minimumFractionDigits: 0,
}).format

const formatPercent = new Intl.NumberFormat('en-AU', {
  style: 'percent',
  minimumFractionDigits: 0,
}).format

export { formatCurrency, formatPercent }
