import { Col, Row } from 'antd';
import './currency.scss';
import CurrencyStats from './components/CurrencyStats';
import CurrencyPriceChart from './components/CurrencyPriceChart/CurrencyPriceChart';

const Currency = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <CurrencyStats />
      </Col>
      <Col span={24}>
        <CurrencyPriceChart />
      </Col>
    </Row>
  );
};

export default Currency;
