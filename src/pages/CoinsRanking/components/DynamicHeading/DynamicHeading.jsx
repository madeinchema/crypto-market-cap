import { useEffect, useState } from 'react'
import { Skeleton, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import ReadMore from '../../../../components/ReadMore/ReadMore'
import './dynamic-heading.scss'
import { PriceChange } from '../../../../components'
import { fetchMarketData } from '../../../../redux/slices/marketDataSlice'

const { Title, Paragraph, Text } = Typography

const DynamicHeading = () => {
  const currency = 'usd'
  const [isReadMore, setIsReadMore] = useState(undefined)
  const dispatch = useDispatch()
  const marketData = useSelector(state => state.marketData)
  const isDataLoaded = !marketData.loading && marketData.data

  useEffect(() => {
    dispatch(fetchMarketData())
  }, [dispatch])

  return (
    <>
      <Title level={2} className="title">
        Today&apos;s Cryptocurrency Prices by Market Cap
      </Title>
      {!isDataLoaded && <Skeleton active />}
      {isDataLoaded && (
        <div className="content">
          <Paragraph className="content--text-container">
            The global crypto market cap is{' '}
            <Text strong>
              <PriceChange
                priceChange={marketData.data.totalMarketCap.usd / 1000000000}
                prefix="$"
                suffix="B"
              />
            </Text>
            {', a '}
            <Text strong>
              <PriceChange
                priceChange={marketData.data.marketCapChangePercentage24hUsd}
                showChange
              />
            </Text>{' '}
            increase over the last day.{' '}
            <ReadMore
              isOpen={isReadMore}
              setIsOpen={setIsReadMore}
              className="read-more"
            />
          </Paragraph>
          {isReadMore && (
            <>
              <Paragraph className="content--text-container">
                <Paragraph className="content--text">
                  There is a total of{' '}
                  <Text strong>{marketData.data.activeCryptocurrencies}</Text>{' '}
                  active cryptocurrencies.
                </Paragraph>
                <Paragraph className="content--text">
                  Bitcoin&apos;s Dominance is{' '}
                  <Text strong>
                    <PriceChange
                      priceChange={marketData.data.marketCapPercentage.btc}
                      showChange
                    />
                  </Text>{' '}
                  {'as of '}
                  <Text strong>
                    {new Date(
                      marketData.data.updatedAt * 1000
                    ).toLocaleString()}
                  </Text>
                  .
                </Paragraph>
                <Paragraph className="content--text">
                  The Total Volume of the cryptocurrency market is{' '}
                  <Text strong>
                    <PriceChange
                      priceChange={
                        marketData.data.totalVolume[currency] / 1000000000
                      }
                      prefix="$"
                      suffix="B"
                    />
                  </Text>
                  .
                </Paragraph>
              </Paragraph>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default DynamicHeading
