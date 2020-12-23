import { Typography } from 'antd';
import Ranking from '../components/Ranking/Ranking';

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Title level={2}>Today&apos;s Cryptocurrency Prices by Market Cap</Title>
      <Ranking />
    </>
  );
};

export default Home;
