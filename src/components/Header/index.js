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

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Logo level={3} {...restProps}>
      {children}
    </Logo>
  );
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return (
    <Menu level={3} {...restProps}>
      {children}
    </Menu>
  );
};

Header.Menu = function HeaderMenu({ children, dataSource, ...restProps }) {
  return (
    <Menu {...restProps}>
      <MenuButton>Menu</MenuButton>
      <MenuList gutter={24}>
        {dataSource.map((menuItem) => (
          <MenuItem key={menuItem.key}>
            <MenuLink href={menuItem.href}>{menuItem.label}</MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Header;
