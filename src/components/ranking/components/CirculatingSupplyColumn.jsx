import { Popover, Space, Row, Col, Progress, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import colors from '../../../theme/colors.module.scss';

const { Text } = Typography;

const CirculatingSupplyPopover = (props) => {
  const { circulatingSupply, totalSupply, symbol } = props;
  const getSupplyPercentage = () => {
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
            <Col>{getSupplyPercentage(circulatingSupply, totalSupply)}%</Col>
          </Row>
          <div>
            <Progress
              showInfo={false}
              percent={((circulatingSupply * 100) / totalSupply).toFixed(2)}
              strokeColor={colors.gray6}
            />
          </div>
          <Row justify="space-between" gutter={24}>
            <Col>
              <Text strong>Circulating Supply</Text>
            </Col>
            <Col>
              {circulatingSupply.toLocaleString()} {symbol.toUpperCase()}
            </Col>
          </Row>
          <Row justify="space-between" gutter={24}>
            <Col>
              <Text strong>Max Supply</Text>
            </Col>
            <Col>
              {totalSupply.toLocaleString()} {symbol.toUpperCase()}
            </Col>
          </Row>
        </Space>
      }
    >
      <InfoCircleOutlined />{' '}
    </Popover>
  );
};

const CirculatingSupplyColumn = (props) => {
  const { coin } = props;
  const {
    circulating_supply: circulatingSupply,
    total_supply: totalSupply,
    symbol,
  } = coin;

  return (
    <div>
      <div>
        {totalSupply && (
          <CirculatingSupplyPopover
            circulatingSupply={circulatingSupply}
            totalSupply={totalSupply}
            symbol={symbol}
          />
        )}
        {circulatingSupply.toLocaleString()} {symbol.toUpperCase()}
      </div>
      {totalSupply && (
        <div>
          <Progress
            showInfo={false}
            percent={((circulatingSupply * 100) / totalSupply).toFixed(2)}
            strokeColor={colors.gray6}
          />
        </div>
      )}
    </div>
  );
};

CirculatingSupplyColumn.propTypes = {
  coin: PropTypes.shape({
    circulating_supply: PropTypes.number,
    total_supply: PropTypes.number,
    symbol: PropTypes.string,
  }),
};

CirculatingSupplyColumn.defaultProps = {
  coin: undefined,
};

CirculatingSupplyPopover.propTypes = {
  circulatingSupply: PropTypes.number,
  totalSupply: PropTypes.number,
  symbol: PropTypes.string,
};

CirculatingSupplyPopover.defaultProps = {
  circulatingSupply: undefined,
  totalSupply: undefined,
  symbol: undefined,
};

export default CirculatingSupplyColumn;
