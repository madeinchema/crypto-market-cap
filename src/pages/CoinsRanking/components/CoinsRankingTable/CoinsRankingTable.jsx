import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { getCoinsRankingFromApi } from '../../../../utilities/api'
import { PriceChange } from '../../../../components'
import CoinColumn from './components/CoinsColumn/CoinsColumn'
import CirculatingSupplyColumn from './components/CirculatingSupplyColumn'
import './coins-ranking-table.scss'

const columns = currency => {
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
      render: function coinIdRender(id, coin) {
        return <CoinColumn coin={coin} />
      },
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      key: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: function coinCurrentPriceRender(price) {
        return `${price.toLocaleString()} ${currency.toUpperCase()}`
      },
    },
    {
      title: '24h',
      dataIndex: 'price_change_percentage_24h_in_currency',
      key: 'price_change_percentage_24h_in_currency',
      sorter: (a, b) =>
        a.price_change_percentage_24h_in_currency -
        b.price_change_percentage_24h_in_currency,
      render: function coinPriceChange24hRender(change) {
        return <PriceChange priceChange={change} showChange />
      },
    },
    {
      title: '7d',
      dataIndex: 'price_change_percentage_7d_in_currency',
      key: 'price_change_percentage_7d_in_currency',
      sorter: (a, b) =>
        a.price_change_percentage_7d_in_currency -
        b.price_change_percentage_7d_in_currency,
      render: function coinPriceChange7dhRender(change) {
        return <PriceChange priceChange={change} showChange />
      },
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap',
      key: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: function coinMarketCapRender(marketCap) {
        return `${marketCap.toLocaleString()} ${currency.toUpperCase()}`
      },
    },
    {
      title: 'Circulating Supply',
      dataIndex: 'circulating_supply',
      key: 'circulating_supply',
      sorter: (a, b) => a.circulating_supply - b.circulating_supply,
      render: function coinCirculatingSupplyRender(circulatingSupply, coin) {
        return <CirculatingSupplyColumn coin={coin} />
      },
    },
    {
      title: 'Last 7 Days',
      dataIndex: 'image',
      key: 'image',
      render: function coin7dChartRender(image, coin) {
        const id = image.match(/\d+/)
        return (
          <img
            style={{ height: 48 }}
            alt={`${coin.symbol} icon`}
            src={`https://www.coingecko.com/coins/${id}/sparkline`}
          />
        )
      },
    },
  ]
}

const CoinsRankingTable = props => {
  const { currency } = props
  const [cryptosData, setCryptosData] = useState(null)
  const [loading, setLoading] = useState(null)

  // TODO: Get ALL the coins and update the table's navigation accordingly
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getCoinsRankingFromApi(currency).then(data => setCryptosData(data))
    }, 200)
    setLoading(false)
  }, [currency])

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
  )
}

CoinsRankingTable.propTypes = {
  currency: PropTypes.string,
}

CoinsRankingTable.defaultProps = {
  currency: undefined,
}

export default CoinsRankingTable
