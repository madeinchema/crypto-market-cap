import PropTypes from 'prop-types'
import './price-change.scss'

const PriceChange = props => {
  const { priceChange, suffix, prefix, className, showChange } = props
  const hasPriceChanged = priceChange && priceChange !== 0
  const hasPriceChangedNegatively = priceChange && priceChange < 0

  const priceChangeClassName =
    hasPriceChanged && hasPriceChangedNegatively ? 'negative' : 'positive'

  const getPriceChangeFormatted = () => {
    const priceChangeFormatted = priceChange || 0
    return priceChangeFormatted.toFixed(2)
  }

  return (
    <span
      className={`price-change ${className || ''} ${
        showChange && priceChangeClassName
      }`}
    >
      {prefix}
      {getPriceChangeFormatted()}
      {suffix}
    </span>
  )
}

PriceChange.propTypes = {
  priceChange: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  className: PropTypes.string,
  showChange: PropTypes.bool,
}
PriceChange.defaultProps = {
  priceChange: undefined,
  prefix: undefined,
  suffix: '%',
  className: undefined,
  showChange: undefined,
}

export default PriceChange
