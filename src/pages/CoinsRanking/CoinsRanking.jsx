import CoinsRankingTable from './components/CoinsRankingTable/CoinsRankingTable';
import DynamicHeading from './components/DynamicHeading/DynamicHeading';

const Home = (props) => {
  const { currency } = props;
  return (
    <>
      <DynamicHeading />
      <CoinsRankingTable currency={currency} />
    </>
  );
};

export default Home;
