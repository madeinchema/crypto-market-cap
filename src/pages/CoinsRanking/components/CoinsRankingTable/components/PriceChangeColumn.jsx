import PropTypes from 'prop-types';
import colors from '../../../../../theme/colors.module.scss';

const PriceChangeColumn = (props) => {
  const { priceChange } = props;
  const hasPriceChanged = priceChange && priceChange !== 0;
  const hasPriceChangedNegatively = priceChange && priceChange < 0;

  const priceChangeStyle = {
    color: hasPriceChangedNegatively ? colors.red7 : colors.green7,
  };

  const getPriceChangeFormatted = () => {
    const priceChangeFormatted = priceChange || 0;
    return priceChangeFormatted.toFixed(2);
  };

  return (
    <div style={hasPriceChanged && priceChangeStyle}>
      {getPriceChangeFormatted()} %
    </div>
  );
};

PriceChangeColumn.propTypes = {
  priceChange: PropTypes.number,
};
PriceChangeColumn.defaultProps = {
  priceChange: undefined,
};

export default PriceChangeColumn;
