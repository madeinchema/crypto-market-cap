import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentCoin } from '../../redux/slices/currentCoinSlice'

import CurrencyInfo from './components/CurrencyInfo'
import CurrencyStats from './components/CurrencyStats'
import CurrencyPriceChart from './components/CurrencyPriceChart/CurrencyPriceChart'
import './currency.scss'

const Currency = () => {
  const { id: coinId } = useParams()
  const dispatch = useDispatch()
  const currentCoin = useSelector(state => state.currentCoin)
  const isDataReady =
    !currentCoin.loading &&
    currentCoin.data &&
    Object.keys(currentCoin.data).length > 0

  useEffect(() => {
    dispatch(fetchCurrentCoin(coinId))
  }, [coinId, dispatch])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Row justify="space-between" align="middle" gutter={[24, 24]}>
          <CurrencyInfo isDataReady={isDataReady} coinData={currentCoin.data} />
          <CurrencyStats
            isDataReady={isDataReady}
            coinData={currentCoin.data}
          />
        </Row>
      </Col>
      <Col span={24}>
        <CurrencyPriceChart />
      </Col>
    </Row>
  )
}

export default Currency
