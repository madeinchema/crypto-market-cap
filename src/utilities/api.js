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
        const { symbol, name } = data;
        return {
          symbol,
          name,
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
};
