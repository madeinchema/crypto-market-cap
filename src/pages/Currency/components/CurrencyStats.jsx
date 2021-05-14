import PropTypes from 'prop-types'
import { Card, Col, Row, Statistic, Skeleton } from 'antd'

const CurrencyStats = props => {
  const { isDataReady, coinData } = props

  return isDataReady ? (
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
              value={coinData.usd24hVol}
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
  isDataReady: PropTypes.bool,
  coinData: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.instanceOf(Object),
    marketCapRank: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    usd24hChange: PropTypes.number,
    usdMarketCap: PropTypes.number,
    usd24hVol: PropTypes.number,
    usdPrice: PropTypes.number,
  }),
}

CurrencyStats.defaultProps = {
  isDataReady: false,
  coinData: undefined,
}

export default CurrencyStats
