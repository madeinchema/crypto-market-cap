import { useState, useEffect } from 'react';
import { Table } from 'antd';
import getCoinsRanking from '../../utilities/api';
import PriceChangeColumn from './components/PriceChangeColumn';
import CoinColumn from './components/CoinColumn';
import CirculatingSupplyColumn from './components/CirculatingSupplyColumn';
import './Ranking.scss';

const columns = (currency) => {
  return [
    {
      title: '#',
      dataIndex: 'market_cap_rank',
      key: 'market_cap_rank',
      sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
      width: '60px',
    },
    {
      title: 'Coin',
      dataIndex: 'id',
      key: 'id',
      // eslint-disable-next-line react/display-name
      render: (id, coin) => <CoinColumn coin={coin} />,
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      key: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: (price) => `${price.toLocaleString()} ${currency.toUpperCase()}`,
    },
    {
      title: '24h',
      dataIndex: 'price_change_percentage_24h_in_currency',
      key: 'price_change_percentage_24h_in_currency',
      sorter: (a, b) =>
        a.price_change_percentage_24h_in_currency -
        b.price_change_percentage_24h_in_currency,
      // eslint-disable-next-line react/display-name
      render: (change) => (
        <PriceChangeColumn change={change}>{`${
          change ? change.toFixed(2) : 0
        } %`}</PriceChangeColumn>
      ),
    },
    {
      title: '7d',
      dataIndex: 'price_change_percentage_7d_in_currency',
      key: 'price_change_percentage_7d_in_currency',
      sorter: (a, b) =>
        a.price_change_percentage_7d_in_currency -
        b.price_change_percentage_7d_in_currency,
      // eslint-disable-next-line react/display-name
      render: (change) => (
        <PriceChangeColumn change={change}>{`${
          change ? change.toFixed(2) : 0
        } %`}</PriceChangeColumn>
      ),
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap',
      key: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: (marketCap) =>
        `${marketCap.toLocaleString()} ${currency.toUpperCase()}`,
    },
    {
      title: 'Circulating Supply',
      dataIndex: 'circulating_supply',
      key: 'circulating_supply',
      sorter: (a, b) => a.circulating_supply - b.circulating_supply,
      // eslint-disable-next-line react/display-name
      render: (circulatingSupply, coin) => (
        <CirculatingSupplyColumn coin={coin} />
      ),
    },
    {
      title: 'Last 7 Days',
      dataIndex: 'image',
      key: 'image',
      // eslint-disable-next-line react/display-name
      render: (image, coin) => {
        const id = image.match(/\d+/);
        return (
          <img
            style={{ height: 48 }}
            alt={`${coin.symbol} icon`}
            src={`https://www.coingecko.com/coins/${id}/sparkline`}
          />
        );
      },
    },
  ];
};

const Ranking = ({ currency = 'usd' }) => {
  const [cryptosData, setCryptosData] = useState(null);
  const [loading, setLoading] = useState(null);

  // TODO: Get ALL the coins and update the table's navigation accordingly
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCoinsRanking(currency).then((data) => setCryptosData(data));
    }, 200);
    setLoading(false);
  }, [currency]);

  return (
    <Table
      columns={columns(currency)}
      dataSource={cryptosData}
      rowKey="symbol"
      className="rankingTable"
      loading={loading || !cryptosData}
      pagination={{ defaultPageSize: 20 }}
      scroll={{ x: 'max-content' }}
    />
  );
};

export default Ranking;
