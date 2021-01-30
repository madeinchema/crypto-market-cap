import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Tag, Typography } from 'antd';
import { getCoinDataFromApi } from '../../utilities/api';

const { Title } = Typography;

const Currency = () => {
  const [coinData, setCoinData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id } = useParams();

  const currencyStyles = {
    tag: {
      fontSize: '1rem',
    },
  };

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
        {coinData.name}
        <Tag style={currencyStyles.tag}>{coinData.symbol.toUpperCase()}</Tag>
      </Title>
    </div>
  ) : (
    <Spin />
  );
};

Currency.propTypes = {};

export default Currency;
