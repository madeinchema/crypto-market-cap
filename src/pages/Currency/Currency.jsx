import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'antd'
import CurrencyInfo from './components/CurrencyInfo'
import CurrencyStats from './components/CurrencyStats'
import CurrencyPriceChart from './components/CurrencyPriceChart/CurrencyPriceChart'
import './currency.scss'
import {
  getCoinDataFromApi,
  getCoinPriceDataFromApi,
} from '../../utilities/api'

const Currency = () => {
  const [isLoading, setIsLoading] = useState(undefined)
  const [coinData, setCoinData] = useState(undefined)
  const [coinPriceData, setCoinPriceData] = useState(undefined)
  const { id: coinId } = useParams()

  useEffect(() => {
    ;(function getCurrencyData() {
      setIsLoading(true)
      getCoinDataFromApi(coinId).then(data => setCoinData(data))
      getCoinPriceDataFromApi(coinId).then(data => setCoinPriceData(data))
      setIsLoading(false)
    })()
  }, [coinId])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Row justify="space-between" align="middle" gutter={[24, 24]}>
          <CurrencyInfo
            isLoading={isLoading}
            coinData={coinData}
            coinPriceData={coinPriceData}
          />
          <CurrencyStats
            isLoading={isLoading}
            coinData={coinData}
            coinPriceData={coinPriceData}
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
