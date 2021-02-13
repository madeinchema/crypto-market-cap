import { Col, Row } from 'antd';
import './currency.scss';
import CurrencyStats from './components/CurrencyStats';
import CurrencyPriceChart from './components/CurrencyPriceChart';

const Currency = () => {
  return (
    <Row>
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
