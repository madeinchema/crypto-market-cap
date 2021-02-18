import { Card, Col, Row, Statistic, Skeleton } from 'antd';

const CurrencyStats = (props) => {
  const { isLoading, coinData, coinPriceData } = props;

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
    <Skeleton active avatar paragraph={{ rows: 4 }} />
  );
};

export default CurrencyStats;
