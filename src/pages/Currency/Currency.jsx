import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Space, Spin, Tag, Typography } from 'antd';
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
    <Row>
      <Col span={24}>
        <Space align="center">
          <img src={coinData.image.small} alt="coin icon" />
          <Title level={2} style={currencyStyles.title}>
            {coinData.name}
          </Title>
          <Tag style={currencyStyles.tag}>{coinData.symbol.toUpperCase()}</Tag>
        </Space>
      </Col>

      <Col span={24}>
        <Space align="center">
          <Title level={2} style={currencyStyles.title}>
            {coinPriceData.usdMarketCap}
          </Title>
        </Space>
      </Col>

      <Col span={24}>
        <Space align="center" direction="vertical">
          <Title style={currencyStyles.tag}>{coinPriceData.usd24hVol}</Title>
          <Title style={currencyStyles.tag}>{coinPriceData.usd24hChange}</Title>
          <Title style={currencyStyles.tag}>
            {coinPriceData.lastUpdatedAt}
          </Title>
        </Space>
      </Col>
    </Row>
  ) : (
    <Spin />
  );
};

Currency.propTypes = {};

export default Currency;
