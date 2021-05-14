import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Spin, Radio } from 'antd';
import { Stock } from '@ant-design/charts';
import { getCoinChartDataFromApi } from '../../../../utilities/api';
import { TIME_FRAMES, TIME_FRAMES_OPTIONS } from './constants/timeFrames';
import '../../currency.scss';

const CurrencyPriceChart = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(
    TIME_FRAMES['30d']
  );
  const [coinChartData, setCoinChartData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id: coinId } = useParams();

  useEffect(() => {
    if (coinId) {
      (function loadCoinChartDataFromApi() {
        setIsLoading(true);
        getCoinChartDataFromApi(
          coinId,
          selectedTimeFrame.daysQty
        ).then((data) => setCoinChartData(data));
        setIsLoading(false);
      })();
    }
  }, [coinId, selectedTimeFrame.daysQty]);

  const handleSelectedTimeFrame = (event) => {
    const newSelectedTimeFrame = event.target.value;
    setSelectedTimeFrame(TIME_FRAMES[newSelectedTimeFrame]);
  };

  return !isLoading && coinChartData ? (
    <Row>
      <Col span={24}>
        <Row justify="end">
          <Col>
            <Radio.Group
              options={TIME_FRAMES_OPTIONS}
              optionType="button"
              buttonStyle="solid"
              value={selectedTimeFrame.label}
              onChange={handleSelectedTimeFrame}
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
