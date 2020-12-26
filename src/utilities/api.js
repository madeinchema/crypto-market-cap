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
          market_cap_change_percentage_24h_usd: marketCapChangePercentage24hUsd,
          total_market_cap: totalMarketCap,
        } = data;
        return {
          marketCapChangePercentage24hUsd,
          totalMarketCap,
        };
      };
      const cryptoGlobalDataFormatted = getCryptoGlobalDataFormatted();
      return cryptoGlobalDataFormatted;
    });
};

export { getCoinsRanking, getCryptoGlobalData };
