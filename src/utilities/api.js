export const getCoinsRanking = (currency) => {
  return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&price_change_percentage=24h,7d`)
    .then(res => res.json());
};
