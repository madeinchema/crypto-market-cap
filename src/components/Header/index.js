/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Container,
  Logo,
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

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Logo level={3} {...restProps}>
      {children}
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
          <MenuItem key={menuItem.key}>
            <MenuLink linkData={menuItem} href={menuItem.href} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Header;
