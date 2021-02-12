import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Skeleton } from 'antd';
import { Stock } from '@ant-design/charts';
import { getCoinChartDataFromApi } from '../../utilities/api';
import './currency.scss';
import CurrencyStats from './components/CurrencyStats';

const Currency = () => {
  const [coinChartData, setCoinChartData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getCoinChartDataFromApi(id).then((data) => setCoinChartData(data));
      setIsLoading(false);
    }
  }, [id]);

  return !isLoading && coinChartData ? (
    <Row>
      <Col span={24}>
        <CurrencyStats />
      </Col>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Stock
              width="100%"
              height={400}
              data={coinChartData}
              xField="trade_date"
              yField={['open', 'close', 'high', 'low']}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <Skeleton active avatar paragraph={{ rows: 4 }} />
  );
};

export default Currency;
