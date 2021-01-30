import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';
import { getCoinDataFromApi } from '../../utilities/api';

const { Title } = Typography;

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
      <img src={coinData.image.small} alt="coin icon" />
      <Title level={2}>
        {coinData.name} - {coinData.symbol.toUpperCase()}
      </Title>
    </div>
  ) : (
    <Spin />
  );
};

Currency.propTypes = {};

export default Currency;
