import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCoinData } from '../../utilities/api';

const Currency = () => {
  const [coinData, setCoinData] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCoinData(id).then((data) => setCoinData(data));
    }
  }, [id]);

  return (
    <div>
      <div>
        {coinData.name} - {coinData.symbol}
      </div>
    </div>
  );
};

Currency.propTypes = {};

export default Currency;
