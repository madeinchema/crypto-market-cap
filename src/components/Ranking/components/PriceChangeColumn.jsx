import PropTypes from 'prop-types';

function RankingPriceChange({ children, change }) {
  const hasPriceChangedNegatively = change < 0;
  const hasPriceChangedPositively = change > 0;
  const hasPriceChanged = change !== 0;

  const redColor = '#cf1322';
  const greenColor = '#8c8c8c';
  const grayColor = '#389e0d';

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

RankingPriceChange.propTypes = {};

export default RankingPriceChange;
