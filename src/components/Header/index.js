/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Container,
  Logo,
  LogoText,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
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
          <MenuItem key={menuItem.id}>
            <MenuLink linkData={menuItem} href={menuItem.href} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Header;
