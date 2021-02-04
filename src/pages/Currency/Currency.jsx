import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  Col,
  Row,
  Space,
  Skeleton,
  Statistic,
  Tag,
  Typography,
} from 'antd';
import {
  getCoinDataFromApi,
  getCoinPriceDataFromApi,
} from '../../utilities/api';

const { Title } = Typography;

const Currency = () => {
  const [coinData, setCoinData] = useState(undefined);
  const [coinPriceData, setCoinPriceData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id } = useParams();

  const currencyStyles = {
    title: {
      margin: 0,
    },
    symbol: {
      opacity: 0.5,
      fontSize: '1.5rem',
    },
    tag: {
      fontSize: '1rem',
      fontWeight: 700,
    },
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getCoinDataFromApi(id).then((data) => setCoinData(data));
      getCoinPriceDataFromApi(id).then((data) => setCoinPriceData(data));
      setIsLoading(false);
    }
  }, [id]);

  return !isLoading && coinData && coinPriceData ? (
    <Row justify="space-between">
      <Col lg={24} xl={8}>
        <Space>
          <img src={coinData.image.small} alt="coin icon" />
          <Space align="start" direction="vertical">
            <div>
              <Title level={2} style={currencyStyles.title}>
                {coinData.name}{' '}
                <span style={currencyStyles.symbol}>
                  {coinData.symbol.toUpperCase()}
                </span>
              </Title>
            </div>
            <Tag style={currencyStyles.tag}>Rank #{coinData.marketCapRank}</Tag>
          </Space>
        </Space>
      </Col>
      <Col lg={24} xl={16}>
        <Space>
          <Col span="auto">
            <Card>
              <Statistic
                title="Market Cap"
                prefix="USD"
                value={coinData.usdMarketCap}
                precision={2}
                style={currencyStyles.title}
              />
            </Card>
          </Col>
          <Col span="auto">
            <Card>
              <Statistic
                title="24h Volume"
                prefix="USD"
                value={coinPriceData.usd24hVol}
                precision={2}
                style={currencyStyles.title}
              />
            </Card>
          </Col>
          <Col span="auto">
            <Card>
              <Statistic
                title="24h Change"
                suffix="%"
                value={coinData.usd24hChange}
                precision={2}
                style={currencyStyles.title}
              />
            </Card>
          </Col>
        </Space>
      </Col>
    </Row>
  ) : (
    <Skeleton active avatar paragraph={{ rows: 4 }} />
  );
};

Currency.propTypes = {};

export default Currency;
