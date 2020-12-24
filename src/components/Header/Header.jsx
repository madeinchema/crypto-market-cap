import { Link } from 'react-router-dom';
import './Header.scss';
import { Layout, Menu, Typography } from 'antd';

const { Title } = Typography;

const Header = () => {
  return (
    <Layout.Header className="layout">
      <Link to="/">
        <Title level={3} className="logo" color="white">
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
          <Link to="/currency-converter">Currency Converter</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
