export const getCoinsRanking = (currency) => {
  return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
    .then(res => res.json());
};
