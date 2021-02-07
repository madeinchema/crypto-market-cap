import * as dayjs from 'dayjs';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

const getCoinsRankingFromApi = (currency) => {
  return fetch(
    `${COINGECKO_API_URL}/coins/markets?vs_currency=${currency}&price_change_percentage=24h,7d`
  ).then((res) => res.json());
};

const getCryptoGlobalDataFromApi = () => {
  return fetch(`${COINGECKO_API_URL}/global`)
    .then((res) => res.json())
    .then(({ data }) => {
      const getCryptoGlobalDataFormatted = () => {
        const {
          active_cryptocurrencies: activeCryptocurrencies,
          market_cap_change_percentage_24h_usd: marketCapChangePercentage24hUsd,
          market_cap_percentage: marketCapPercentage,
          total_market_cap: totalMarketCap,
          total_volume: totalVolume,
          updated_at: updatedAt,
        } = data;
        return {
          activeCryptocurrencies,
          totalMarketCap,
          marketCapChangePercentage24hUsd,
          marketCapPercentage,
          totalVolume,
          updatedAt,
        };
      };
      const cryptoGlobalDataFormatted = getCryptoGlobalDataFormatted();
      return cryptoGlobalDataFormatted;
    });
};

const getCoinDataFromApi = (coinId) => {
  return fetch(
    `${COINGECKO_API_URL}/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  )
    .then((res) => res.json())
    .then((data) => {
      const getCoinDataFormatted = () => {
        const {
          symbol,
          name,
          image,
          description,
          links,
          market_cap_rank: marketCapRank,
          market_data: {
            market_cap: { usd: usdMarketCap },
            market_cap_change_percentage_24h: usd24hChange,
          },
        } = data;
        return {
          symbol,
          name,
          image,
          description: description.en,
          links,
          marketCapRank,
          usdMarketCap,
          usd24hChange,
        };
      };
      const coinDataFormatted = getCoinDataFormatted();
      return coinDataFormatted;
    });
};

const getCoinPriceDataFromApi = (coinId) => {
  return fetch(
    `${COINGECKO_API_URL}/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true" -H "accept: application/json"`
  )
    .then((res) => res.json())
    .then((data) => {
      const getCoinDataFormatted = () => {
        const { usd_24h_vol: usd24hVol } = data[coinId];
        return {
          usd24hVol,
        };
      };
      const coinPriceDataFormatted = getCoinDataFormatted();
      return coinPriceDataFormatted;
    });
};

const getCoinChartDataFromApi = (coinId) => {
  return fetch(
    `${COINGECKO_API_URL}/coins/${coinId}/ohlc?vs_currency=usd&days=30`
  )
    .then((res) => res.json())
    .then((data) => {
      const getCoinChartDataFormatted = () => {
        return data.map((candlestick) => {
          const tradeDateFormatted = dayjs(candlestick[0]).format(
            'YYYY-MM-DD HH:mm'
          );
          return {
            trade_date: tradeDateFormatted,
            open: candlestick[1],
            high: candlestick[2],
            low: candlestick[3],
            close: candlestick[4],
          };
        });
      };
      const coinChartDataFormatted = getCoinChartDataFormatted();
      return coinChartDataFormatted;
    });
};

export {
  getCoinsRankingFromApi,
  getCryptoGlobalDataFromApi,
  getCoinDataFromApi,
  getCoinPriceDataFromApi,
  getCoinChartDataFromApi,
};
