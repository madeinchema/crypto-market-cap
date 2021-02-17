import { useEffect, useState } from 'react';
import { Row, Col, Spin, Radio } from 'antd';
import { Stock } from '@ant-design/charts';
import { useParams } from 'react-router-dom';
import { getCoinChartDataFromApi } from '../../../utilities/api';
import '../currency.scss';

const TIME_FRAMES = {
  '1y': {
    daysQty: 365,
    label: '1y',
  },
  '30d': {
    daysQty: 30,
    label: '30d',
  },
  '24hs': {
    daysQty: 1,
    label: '24hs',
  },
};

const CurrencyPriceChart = () => {
  const [timeFrame, setTimeFrame] = useState(TIME_FRAMES['30d']);
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

  const handleTimeFrame = (event) => {
    const selectedTimeFrame = event.target.value;
    setTimeFrame(TIME_FRAMES[selectedTimeFrame]);
  };

  const options = [
    { label: '24hs', value: '24hs' },
    { label: '30d', value: '30d' },
    { label: '1y', value: '1y' },
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
              onChange={handleTimeFrame}
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
