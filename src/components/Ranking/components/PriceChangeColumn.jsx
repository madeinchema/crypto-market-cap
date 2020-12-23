import PropTypes from 'prop-types';

function PriceChangeColumn({ children, change }) {
  const hasPriceChangedNegatively = change < 0;
  const hasPriceChangedPositively = change > 0;
  const hasPriceChanged = change !== 0;

  const redColor = '#cf1322';
  const grayColor = '#8c8c8c';
  const greenColor = '#389e0d';

  let priceChangeColor;
  if (!hasPriceChanged) {
    priceChangeColor = grayColor;
  } else if (hasPriceChangedNegatively) {
    priceChangeColor = redColor;
  } else if (hasPriceChangedPositively) {
    priceChangeColor = greenColor;
  }

  return <div style={{ color: priceChangeColor }}>{children}</div>;
}

PriceChangeColumn.propTypes = {
  children: PropTypes.node,
  change: PropTypes.number,
};
PriceChangeColumn.defaultProps = {
  children: undefined,
  change: undefined,
};

export default PriceChangeColumn;
