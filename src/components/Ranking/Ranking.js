import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getCoinsRanking } from '../../utilities/api';

const columns = [
  {
    title: 'Icon',
    dataIndex: 'image',
    key: 'image',
    render: icon => <img src={icon} style={{ width: 24, height: 24 }}/>,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
    render: symbol => `${symbol.toUpperCase()}`,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'current_price',
    key: 'current_price',
    render: price => `${price} USD`,
  },
  {
    title: '24h Price Change',
    dataIndex: 'price_change_24h',
    key: 'price_change_24h',
    render: change => `${change} USD`,
  },
  {
    title: '24h % Change',
    dataIndex: 'price_change_percentage_24h',
    key: 'price_change_percentage_24h',
    render: change => `${change ? change.toFixed(2) : 0} %`,
  },
  {
    title: 'Last 7 Days',
    dataIndex: 'image',
    key: 'image',
    render: image => {
      // TODO: Improve regex
      let id = image.replace(/(https:\/\/assets.coingecko.com\/coins\/images\/)/, '');
      id = id.replace(/(?!\d).+/, '');
      return <img style={{ height: 28 }} alt='coin icon' src={`https://www.coingecko.com/coins/${id}/sparkline`}/>
    },
  },
];

const Ranking = ({ currency = 'usd' }) => {
  const [cryptosData, setCryptosData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCoinsRanking(currency).then(data => setCryptosData(data));
    }, 1000)
    setLoading(false)
  }, [])

  return (
    <div>
      <Table
        loading={loading || !cryptosData}
        dataSource={cryptosData}
        columns={columns}
      />
    </div>
  );
};

export default Ranking;
