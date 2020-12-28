import Logo from '../../assets/Logo';
import { Header } from '../../components';
import headerMenuData from '../Footer/utils/constants/headerMenuData';
import './header.scss';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Logo>CryptoMarketCap</Header.Logo>
      <Header.Menu
        dataSource={headerMenuData}
        siderLogo={<Logo />}
        logoText="CryptoMarketCap"
      />
    </Header>
  );
};

export default HeaderContainer;
