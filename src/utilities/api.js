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
  return fetch(`${COINGECKO_API_URL}/coins/${coinId}`)
    .then((res) => res.json())
    .then((data) => {
      const getCoinDataFormatted = () => {
        const { symbol, name, image, description, links } = data;
        return {
          symbol,
          name,
          image,
          description: description.en,
          links,
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
        const {
          usd,
          usd_market_cap: usdMarketCap,
          usd_24h_vol: usd24hVol,
          usd_24h_change: usd24hChange,
          last_updated_at: lastUpdatedAt,
        } = data[coinId];
        return {
          usd,
          usdMarketCap,
          usd24hVol,
          usd24hChange,
          lastUpdatedAt,
        };
      };
      const coinDataFormatted = getCoinDataFormatted();
      return coinDataFormatted;
    });
};

export {
  getCoinsRankingFromApi,
  getCryptoGlobalDataFromApi,
  getCoinDataFromApi,
  getCoinPriceDataFromApi,
};
