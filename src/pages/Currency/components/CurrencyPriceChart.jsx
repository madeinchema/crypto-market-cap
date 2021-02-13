import { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import { Stock } from '@ant-design/charts';
import { useParams } from 'react-router-dom';
import { getCoinChartDataFromApi } from '../../../utilities/api';
import '../currency.scss';

const CurrencyPriceChart = () => {
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
        <Stock
          width="100%"
          height={400}
          data={coinChartData}
          xField="trade_date"
          yField={['open', 'close', 'high', 'low']}
        />
      </Col>
    </Row>
  ) : (
    <Row className="currency-price-chart" justify="center" align="middle">
      <Col span="auto">
        <Spin size="large" />
      </Col>
    </Row>
  );
};

export default CurrencyPriceChart;
