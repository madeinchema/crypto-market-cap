import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import './header.scss';

const { Title } = Typography;

const HeaderContainer = () => {
  return (
    <Layout.Header>
      <Link to="/">
        <Title level={3} className="header__logo">
          Crypto Market Cap
        </Title>
      </Link>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key="2" disabled>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item key="3" disabled>
          <Link to="/compare">Compare</Link>
        </Menu.Item>
        <Menu.Item key="4" disabled>
          <Link to="/converter">Currency Converter</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default HeaderContainer;
