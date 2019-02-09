const formatCurrency = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  minimumFractionDigits: 0,
}).format

const formatPercent = new Intl.NumberFormat('en-AU', {
  style: 'percent',
  minimumFractionDigits: 1,
}).format

const sumBy = (items, prop) =>
  items.reduce((total, nextItem) => total + nextItem[prop], 0)

export { formatCurrency, formatPercent, sumBy }
