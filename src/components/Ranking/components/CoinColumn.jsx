import PropTypes from 'prop-types';

const CoinColumn = (props) => {
  const { coin } = props;
  const { name, image, symbol } = coin;
  return (
    <div style={{ display: 'flex', alignContent: 'center' }}>
      <img
        alt={`${name} icon`}
        src={image}
        style={{ width: 24, height: 24, marginRight: 8 }}
      />
      <span style={{ fontWeight: '700', marginRight: 4 }}>{name}</span>
      <span style={{ color: '#8c8c8c' }}>{symbol.toUpperCase()}</span>
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
