import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getCoinsRanking } from '../../utilities/api';

const columns = (currency) => {
  return [
    {
      title: '#',
      dataIndex: 'market_cap_rank',
      key: 'market_cap_rank',
    },
    {
      title: 'Coin',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (symbol, coin) => (
        <div style={{ display: 'flex', alignContent: 'center'}}>
          <img
            alt={`${coin.name} icon`}
            src={coin.image}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <span style={{ fontWeight: '600', marginRight: 4 }}>
          {coin.name}
        </span>

          <span style={{ fontWeight: '600', color: '#8c8c8c' }}>
          {symbol.toUpperCase()}
        </span>


        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      key: 'current_price',
      render: price => `${price} ${currency.toUpperCase()}`,
    },
    {
      title: '24h Change',
      dataIndex: 'price_change_percentage_24h',
      key: 'price_change_percentage_24h',
      render: change => `${change ? change.toFixed(2) : 0} %`,
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap',
      key: 'market_cap',
      render: marketCap => `${marketCap.toLocaleString()} ${currency.toUpperCase()}`,
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
}

const Ranking = ({ currency = 'usd' }) => {
  const [cryptosData, setCryptosData] = useState(null);
  const [loading, setLoading] = useState(null);

  // TODO: Get ALL the coins and update the table's navigation accordingly
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCoinsRanking(currency).then(data => {
        // console.log(data)
        setCryptosData(data)
      });
    }, 1000)
    setLoading(false)
  }, [])

  return (
    <div>
      <Table
        loading={loading || !cryptosData}
        dataSource={cryptosData}
        columns={columns(currency)}
        pagination={{ defaultPageSize: 20 }}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default Ranking;
