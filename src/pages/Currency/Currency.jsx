import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { getCoinDataFromApi } from '../../utilities/api';

const Currency = () => {
  const [coinData, setCoinData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getCoinDataFromApi(id).then((data) => setCoinData(data));
      setIsLoading(false);
    }
  }, [id]);

  return !isLoading && coinData ? (
    <div>
      <div>
        {coinData.name} - {coinData.symbol}
      </div>
    </div>
  ) : (
    <Spin />
  );
};

Currency.propTypes = {};

export default Currency;
