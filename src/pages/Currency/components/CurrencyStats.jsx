import PropTypes from 'prop-types'
import { Card, Col, Row, Statistic, Skeleton } from 'antd'

const CurrencyStats = props => {
  const { isLoading, coinData, coinPriceData } = props

  return !isLoading && coinData && coinPriceData ? (
    <Col xs={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 12 }}>
      <Row align="middle">
        <Col flex="auto">
          <Card>
            <Statistic
              title="Market Cap"
              prefix="USD"
              value={coinData.usdMarketCap}
              precision={2}
              className="currency__title"
            />
          </Card>
        </Col>

        <Col flex="auto">
          <Card>
            <Statistic
              title="24h Volume"
              prefix="USD"
              value={coinPriceData.usd24hVol}
              precision={2}
              className="currency__title"
            />
          </Card>
        </Col>

        <Col flex="auto">
          <Card>
            <Statistic
              title="24h Change"
              suffix="%"
              value={coinData.usd24hChange}
              precision={2}
              className="currency__title"
            />
          </Card>
        </Col>
      </Row>
    </Col>
  ) : (
    <Skeleton active paragraph={{ rows: 1 }} />
  )
}

CurrencyStats.propTypes = {
  isLoading: PropTypes.bool,
  coinData: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.instanceOf(Object),
    marketCapRank: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    usd24hChange: PropTypes.number,
    usdMarketCap: PropTypes.number,
  }),
  coinPriceData: PropTypes.shape({
    usd24hVol: PropTypes.number,
    usdPrice: PropTypes.number,
  }),
}

CurrencyStats.defaultProps = {
  isLoading: false,
  coinData: undefined,
  coinPriceData: undefined,
}

export default CurrencyStats
