import { useEffect, useState } from 'react';
import { Row, Col, Spin, Radio } from 'antd';
import { Stock } from '@ant-design/charts';
import { useParams } from 'react-router-dom';
import { getCoinChartDataFromApi } from '../../../utilities/api';
import '../currency.scss';

const TIME_FRAMES = {
  oneYear: {
    daysQty: 365,
    label: '1y',
  },
  thirtyDays: {
    daysQty: 30,
    label: '30d',
  },
  oneDay: {
    daysQty: 1,
    label: '24hs',
  },
};

const CurrencyPriceChart = () => {
  const [timeFrame, setTimeFrame] = useState(TIME_FRAMES.thirtyDays);
  const [coinChartData, setCoinChartData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id: coinId } = useParams();

  useEffect(() => {
    if (coinId) {
      setIsLoading(true);
      getCoinChartDataFromApi(coinId, timeFrame.daysQty).then((data) =>
        setCoinChartData(data)
      );
      setIsLoading(false);
    }
  }, [coinId, timeFrame.daysQty]);

  const options = [
    { label: '1y', value: '1y' },
    { label: '30d', value: '30d' },
    { label: '24hs', value: '24hs' },
  ];

  return !isLoading && coinChartData ? (
    <Row>
      <Col span={24}>
        <Row justify="end">
          <Col>
            <Radio.Group
              options={options}
              optionType="button"
              buttonStyle="solid"
              value={timeFrame.label}
            />
          </Col>
        </Row>
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
    <Row className="currency-price-chart" justify="center" align="middle">
      <Col span="auto">
        <Spin size="large" />
      </Col>
    </Row>
  );
};

export default CurrencyPriceChart;
