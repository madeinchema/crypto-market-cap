import PropTypes from 'prop-types'
import { Col, Row, Space, Statistic, Tag, Typography, Skeleton } from 'antd'

const CurrencyInfo = props => {
  const { isLoading, coinData, coinPriceData } = props
  const { Title } = Typography

  return !isLoading && coinData && coinPriceData ? (
    <Col flex="1" xs={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 12 }}>
      <Row align="middle">
        <Col span="auto" flex="auto">
          <Space align="center">
            <img src={coinData.image.small} alt="coin icon" />
            <Space align="start" direction="vertical">
              <div>
                <Title level={2} className="currency__title">
                  {coinData.name}{' '}
                  <span className="currency__symbol">
                    {coinData.symbol.toUpperCase()}
                  </span>
                </Title>
              </div>
              <Tag className="currency__tag">
                Rank #{coinData.marketCapRank}
              </Tag>
            </Space>
          </Space>
        </Col>
        <Col xs={{ flex: 1 }}>
          <Row align="middle" justify="end">
            <Statistic
              title="Price"
              prefix="USD"
              value={coinPriceData.usdPrice}
              precision={2}
              className="currency__price"
            />
          </Row>
        </Col>
      </Row>
    </Col>
  ) : (
    <Skeleton active avatar paragraph={{ rows: 1 }} />
  )
}

CurrencyInfo.propTypes = {
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

CurrencyInfo.defaultProps = {
  isLoading: false,
  coinData: undefined,
  coinPriceData: undefined,
}

export default CurrencyInfo
