import React, { useEffect, useState } from 'react';
import {
  Card,
  Col,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
  Skeleton,
} from 'antd';
import { useParams } from 'react-router-dom';
import {
  getCoinDataFromApi,
  getCoinPriceDataFromApi,
} from '../../../utilities/api';

const CurrencyStats = () => {
  const [coinData, setCoinData] = useState(undefined);
  const [coinPriceData, setCoinPriceData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id } = useParams();

  const { Title } = Typography;

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getCoinDataFromApi(id).then((data) => setCoinData(data));
      getCoinPriceDataFromApi(id).then((data) => setCoinPriceData(data));
      setIsLoading(false);
    }
  }, [id]);

  return !isLoading && coinData && coinPriceData ? (
    <Row justify="space-between" align="middle" gutter={[24, 24]}>
      <Col span="auto" flex="1">
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
          <Col flex="auto">
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

      <Col span="auto">
        <Space size="middle">
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
        </Space>
      </Col>
    </Row>
  ) : (
    <Skeleton active avatar paragraph={{ rows: 4 }} />
  );
};

export default CurrencyStats;
