import { useState, useEffect } from 'react';
import { Table, Progress, Popover, Space, Row, Col, Typography } from 'antd';
import './Ranking.css';
import { getCoinsRanking } from '../../utilities/api';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const columns = (currency) => {
  return [
    {
      title: '#',
      dataIndex: 'market_cap_rank',
      key: 'market_cap_rank',
      sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
    },
    {
      title: 'Coin',
      dataIndex: 'id',
      key: 'id',
      render: (symbol, coin) => <CoinColumnElement coin={coin}/>,
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      key: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: price => `${price.toLocaleString()} ${currency.toUpperCase()}`,
    },
    {
      title: '24h Change',
      dataIndex: 'price_change_percentage_24h',
      key: 'price_change_percentage_24h',
      sorter: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h,
      render: change => <ColorizedPriceChange change={change}>{`${change ? change.toFixed(2) : 0} %`}</ColorizedPriceChange>
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap',
      key: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: marketCap => `${marketCap.toLocaleString()} ${currency.toUpperCase()}`,
    },
    {
      title: 'Circulating Supply',
      dataIndex: 'circulating_supply',
      key: 'circulating_supply',
      sorter: (a, b) => a.circulating_supply - b.circulating_supply,
      render: (circulatingSupply, coin) => <CirculatingSupplyColumn coin={coin}/>,
    },
    {
      title: 'Last 7 Days',
      dataIndex: 'image',
      key: 'image',
      render: image => {
        let id = image.match(/\d+/);
        return <img style={{ height: 48 }} alt='coin icon' src={`https://www.coingecko.com/coins/${id}/sparkline`}/>
      },
    },
  ];
}

function ColorizedPriceChange({ children, change }) {
  const color = (change < 0)
    ? '#cf1322'
    : (change === 0 ? '#8c8c8c' : '#389e0d');

  return <div style={{color: color }}>{children}</div>
}

function CoinColumnElement({ coin }) {
  return (
    <div style={{ display: 'flex', alignContent: 'center' }}>
      <img
        alt={`${coin.name} icon`}
        src={coin.image}
        style={{ width: 24, height: 24, marginRight: 8 }}
      />
      <span style={{ fontWeight: '700', marginRight: 4 }}>
        {coin.name}
      </span>
      <span style={{ color: '#8c8c8c' }}>
        {coin.symbol.toUpperCase()}
      </span>
    </div>
  )
}

function CirculatingSupplyColumn({ coin }) {
  return (
    <div>
      <div>
        {coin.total_supply && <CirculatingSupplyPopover coin={coin}/>}
        {coin.circulating_supply.toLocaleString()}{' '}{coin.symbol.toUpperCase()}
      </div>
      {coin.total_supply && (
        <div>
          <Progress
            showInfo={false}
            percent={(coin.circulating_supply * 100 / coin.total_supply).toFixed(2)}
            strokeColor='gray'
          />
        </div>
      )}
    </div>
  )
}

function CirculatingSupplyPopover({ coin }) {

  const getSupplyPercentage = (circulatingSupply, totalSupply) => {
    const percentage = (circulatingSupply * 100) / totalSupply;
    return percentage.toFixed(2);
  }

  return (
    <Popover content={(
      <Space direction='vertical'>
        <Row justify='space-between' gutter={24}>
          <Col><Text strong>Percentage</Text></Col>
          <Col>{getSupplyPercentage(coin.circulating_supply, coin.total_supply)}%</Col>
        </Row>
        <div>
          <Progress
            showInfo={false}
            percent={(coin.circulating_supply * 100 / coin.total_supply).toFixed(2)}
            strokeColor='gray'
          />
        </div>
        <Row justify='space-between' gutter={24}>
          <Col><Text strong>Circulating Supply</Text></Col>
          <Col>{coin.circulating_supply.toLocaleString()}{' '}{coin.symbol.toUpperCase()}</Col>
        </Row>
        <Row justify='space-between' gutter={24}>
          <Col><Text strong>Max Supply</Text></Col>
          <Col>{coin.total_supply.toLocaleString()}{' '}{coin.symbol.toUpperCase()}</Col>
        </Row>
      </Space>
    )}>
      <InfoCircleOutlined/>{' '}
    </Popover>
  )
}

const Ranking = ({ currency = 'usd' }) => {
  const [cryptosData, setCryptosData] = useState(null);
  const [loading, setLoading] = useState(null);

  // TODO: Get ALL the coins and update the table's navigation accordingly
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCoinsRanking(currency).then(data => setCryptosData(data));
    }, 200);
    setLoading(false)

  }, [])

  return (
    <div>
      <Table
        columns={columns(currency)}
        dataSource={cryptosData}
        rowKey='symbol'
        className='rankingTable'
        loading={loading || !cryptosData}
        pagination={{ defaultPageSize: 20 }}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default Ranking;

