import { Header } from '../../components';
import headerMenuData from '../Footer/utils/constants/headerMenuData';
import './header.scss';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Logo>CryptoMarketCap</Header.Logo>
      <Header.Menu dataSource={headerMenuData} />
    </Header>
  );
};

export default HeaderContainer;
