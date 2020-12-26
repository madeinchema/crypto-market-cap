import PropTypes from 'prop-types';
import './coins-column.scss';

const CoinColumn = (props) => {
  const { coin } = props;
  const { name, image, symbol } = coin;
  return (
    <div className="coin-column__container">
      <img alt={`${name} icon`} src={image} className="coin-column__image" />
      <span className="coin-column__name">{name}</span>
      <span className="coin-column__symbol">{symbol.toUpperCase()}</span>
    </div>
  );
};

CoinColumn.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    symbol: PropTypes.string,
  }),
};

CoinColumn.defaultProps = {
  coin: undefined,
};

export default CoinColumn;
