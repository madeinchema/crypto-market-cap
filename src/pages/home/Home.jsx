import Ranking from '../../components/ranking/Ranking';
import DynamicHeading from './components/DynamicHeading/DynamicHeading';

const Home = (props) => {
  const { currency } = props;
  return (
    <>
      <DynamicHeading />
      <Ranking currency={currency} />
    </>
  );
};

export default Home;
