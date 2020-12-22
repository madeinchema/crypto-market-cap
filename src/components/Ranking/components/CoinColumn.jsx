import PropTypes from 'prop-types';

function CoinColumn({ coin }) {
  return (
    <div style={{ display: 'flex', alignContent: 'center' }}>
      <img
        alt={`${coin.name} icon`}
        src={coin.image}
        style={{ width: 24, height: 24, marginRight: 8 }}
      />
      <span style={{ fontWeight: '700', marginRight: 4 }}>{coin.name}</span>
      <span style={{ color: '#8c8c8c' }}>{coin.symbol.toUpperCase()}</span>
    </div>
  );
}

CoinColumn.propTypes = {};

export default CoinColumn;
