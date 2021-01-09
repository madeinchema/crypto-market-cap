/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Col } from 'antd';
import { Link } from '..';
import {
  Container,
  Logo,
  LogoText,
  Menu,
  MenuButton,
  MenuList,
} from './styles/header';

const Header = (props) => {
  const {
    children,
    dataSource,
    siderLogo,
    logoText,
    openSider,
    ...restProps
  } = props;
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo(props) {
  const { logo, children } = props;
  return (
    <Logo>
      {logo}
      <LogoText level={3}>{children}</LogoText>
    </Logo>
  );
};

Header.Menu = function HeaderMenu(props) {
  const { dataSource, openSider, ...restProps } = props;
  return (
    <Menu {...restProps}>
      <MenuButton onClick={openSider}>Menu</MenuButton>
      <MenuList gutter={24}>
        {dataSource.map((menuItem) => (
          <Col key={menuItem.id}>
            <Link linkData={menuItem} href={menuItem.href} />
          </Col>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Header;
