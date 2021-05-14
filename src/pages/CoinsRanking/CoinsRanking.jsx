import PropTypes from 'prop-types'
import CoinsRankingTable from './components/CoinsRankingTable/CoinsRankingTable'
import DynamicHeading from './components/DynamicHeading/DynamicHeading'

const Home = props => {
  const { currency } = props
  return (
    <>
      <DynamicHeading />
      <CoinsRankingTable currency={currency} />
    </>
  )
}

Home.propTypes = {
  currency: PropTypes.string,
}

Home.defaultProps = {
  currency: undefined,
}

export default Home
