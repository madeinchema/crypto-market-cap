// eslint-disable-next-line no-unused-vars
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { grey, green, red } from '@ant-design/colors';

function PriceChangeColumn({ children, change }) {
  const hasPriceChangedNegatively = change < 0;
  const hasPriceChangedPositively = change > 0;

  const greyColor = grey[4];
  const redColor = red[6];
  const greenColor = green[6];

  let priceChangeColor = greyColor;
  if (hasPriceChangedNegatively) {
    priceChangeColor = redColor;
  } else if (hasPriceChangedPositively) {
    priceChangeColor = greenColor;
  }
  return <div css={{ color: priceChangeColor }}>{children}</div>;
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
