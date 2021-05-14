import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './coins-column.scss'

const CoinColumn = props => {
  const { coin } = props
  const { name, image, symbol, id } = coin
  return (
    <div className="coin-column__container">
      <Link to={`/currencies/${id}`}>
        <img alt={`${name} icon`} src={image} className="coin-column__image" />
        <span className="coin-column__name">{name}</span>
        <span className="coin-column__symbol">{symbol.toUpperCase()}</span>
      </Link>
    </div>
  )
}

CoinColumn.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    symbol: PropTypes.string,
  }),
}

CoinColumn.defaultProps = {
  coin: undefined,
}

export default CoinColumn
