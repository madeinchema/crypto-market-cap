const getCoinsRanking = (currency) => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&price_change_percentage=24h,7d`
  ).then((res) => res.json());
};

const getCryptoGlobalData = () => {
  return fetch(`https://api.coingecko.com/api/v3/global`)
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

export { getCoinsRanking, getCryptoGlobalData };
