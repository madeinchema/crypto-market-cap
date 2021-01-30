import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Space, Spin, Tag, Typography } from 'antd';
import { getCoinDataFromApi } from '../../utilities/api';

const { Title } = Typography;

const Currency = () => {
  const [coinData, setCoinData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const { id } = useParams();

  const currencyStyles = {
    title: {
      margin: 0,
    },
    tag: {
      fontSize: '1rem',
      fontWeight: 700,
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
    <Space align="center">
      <img src={coinData.image.small} alt="coin icon" />
      <Space align="center">
        <Title level={2} style={currencyStyles.title}>
          {coinData.name}
        </Title>
        <Tag style={currencyStyles.tag}>{coinData.symbol.toUpperCase()}</Tag>
      </Space>
    </Space>
  ) : (
    <Spin />
  );
};

Currency.propTypes = {};

export default Currency;
