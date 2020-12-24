import PropTypes from 'prop-types';

const coinColumnStyles = {
  container: { display: 'flex', alignContent: 'center' },
  image: { width: 24, height: 24, marginRight: 8 },
  name: { fontWeight: '700', marginRight: 4 },
  symbol: { color: '#8c8c8c' },
};

const CoinColumn = (props) => {
  const { coin } = props;
  const { name, image, symbol } = coin;
  return (
    <div style={coinColumnStyles.container}>
      <img alt={`${name} icon`} src={image} style={coinColumnStyles.image} />
      <span style={coinColumnStyles.name}>{name}</span>
      <span style={coinColumnStyles.symbol}>{symbol.toUpperCase()}</span>
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
