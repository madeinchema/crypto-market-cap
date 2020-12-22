import { Popover, Space, Row, Col, Progress, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const { Text } = Typography;

const CirculatingSupplyPopover = ({ coin }) => {
  const getSupplyPercentage = (circulatingSupply, totalSupply) => {
    const percentage = (circulatingSupply * 100) / totalSupply;
    return percentage.toFixed(2);
  };

  return (
    <Popover
      content={
        <Space direction="vertical">
          <Row justify="space-between" gutter={24}>
            <Col>
              <Text strong>Percentage</Text>
            </Col>
            <Col>
              {getSupplyPercentage(coin.circulating_supply, coin.total_supply)}%
            </Col>
          </Row>
          <div>
            <Progress
              showInfo={false}
              percent={(
                (coin.circulating_supply * 100) /
                coin.total_supply
              ).toFixed(2)}
              strokeColor="gray"
            />
          </div>
          <Row justify="space-between" gutter={24}>
            <Col>
              <Text strong>Circulating Supply</Text>
            </Col>
            <Col>
              {coin.circulating_supply.toLocaleString()}{' '}
              {coin.symbol.toUpperCase()}
            </Col>
          </Row>
          <Row justify="space-between" gutter={24}>
            <Col>
              <Text strong>Max Supply</Text>
            </Col>
            <Col>
              {coin.total_supply.toLocaleString()} {coin.symbol.toUpperCase()}
            </Col>
          </Row>
        </Space>
      }
    >
      <InfoCircleOutlined />{' '}
    </Popover>
  );
};

const CirculatingSupplyColumn = ({ coin }) => {
  return (
    <div>
      <div>
        {coin.total_supply && <CirculatingSupplyPopover coin={coin} />}
        {coin.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}
      </div>
      {coin.total_supply && (
        <div>
          <Progress
            showInfo={false}
            percent={(
              (coin.circulating_supply * 100) /
              coin.total_supply
            ).toFixed(2)}
            strokeColor="gray"
          />
        </div>
      )}
    </div>
  );
};

CirculatingSupplyColumn.propTypes = {};

export default CirculatingSupplyColumn;
