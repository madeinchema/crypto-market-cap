import { useEffect, useState } from 'react'
import { Skeleton, Typography } from 'antd'
import ReadMore from '../../../../components/ReadMore/ReadMore'
import './dynamic-heading.scss'
import { getCryptoGlobalDataFromApi } from '../../../../utilities/api'
import { PriceChange } from '../../../../components'

const { Title, Paragraph, Text } = Typography

const DynamicHeading = () => {
  const currency = 'usd'
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(undefined)
  const [cryptoGlobalData, setCryptoGlobalData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(undefined)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      getCryptoGlobalDataFromApi(currency).then(data =>
        setCryptoGlobalData(data)
      )
      setIsLoading(false)
    }, 200)
  }, [])

  return (
    <>
      <Title level={2} className="title">
        Today&apos;s Cryptocurrency Prices by Market Cap
      </Title>
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <div className="content">
          <Paragraph className="content--text-container">
            The global crypto market cap is{' '}
            <Text strong>
              <PriceChange
                priceChange={
                  cryptoGlobalData &&
                  cryptoGlobalData.totalMarketCap.usd / 1000000000
                }
                prefix="$"
                suffix="B"
              />
            </Text>
            , a{' '}
            <Text strong>
              <PriceChange
                priceChange={
                  cryptoGlobalData &&
                  cryptoGlobalData.marketCapChangePercentage24hUsd
                }
                showChange
              />
            </Text>{' '}
            increase over the last day.{' '}
            <ReadMore
              isOpen={isReadMoreOpen}
              setIsOpen={setIsReadMoreOpen}
              className="read-more"
            />
          </Paragraph>
          {isReadMoreOpen && (
            <>
              <Paragraph className="content--text-container">
                <Paragraph className="content--text">
                  There is a total of{' '}
                  <Text strong>
                    {cryptoGlobalData &&
                      cryptoGlobalData.activeCryptocurrencies}
                  </Text>{' '}
                  active cryptocurrencies.
                </Paragraph>
                <Paragraph className="content--text">
                  Bitcoin&apos;s Dominance is{' '}
                  <Text strong>
                    <PriceChange
                      priceChange={
                        cryptoGlobalData &&
                        cryptoGlobalData.marketCapPercentage.btc
                      }
                      showChange
                    />
                  </Text>{' '}
                  as of{' '}
                  <Text strong>
                    {cryptoGlobalData &&
                      new Date(
                        cryptoGlobalData.updatedAt * 1000
                      ).toLocaleString()}
                  </Text>
                  .
                </Paragraph>
                <Paragraph className="content--text">
                  The Total Volume of the cryptocurrency market is{' '}
                  <Text strong>
                    <PriceChange
                      priceChange={
                        cryptoGlobalData &&
                        cryptoGlobalData.totalVolume[currency] / 1000000000
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

/**
 *           activeCryptocurrencies,
          totalMarketCap,
          marketCapChangePercentage24hUsd,
          marketCapPercentage,
          totalVolume,
          updatedAt,
 */
