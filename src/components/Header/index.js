/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import {
  Container,
  Logo,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
  MenuSider,
  MenuSiderMenu,
  MenuSiderMenuItem,
  MenuSiderLogo,
  MenuSiderOverlay,
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

Header.Menu = function HeaderMenu({
  children,
  dataSource,
  siderLogo,
  logoText,
  ...restProps
}) {
  const [collapsed, setCollapsed] = useState(true);

  const closeSider = () => {
    setCollapsed(true);
  };

  const openSider = () => {
    setCollapsed(false);
  };

  useEffect(() => {
    if (collapsed) {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    };
  }, [collapsed]);

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
      <MenuSider
        breakpoint="lg"
        onBreakpoint={closeSider}
        collapsible
        collapsed={collapsed}
        onCollapse={closeSider}
        collapsedWidth={1}
        reverseArrow
        theme="light"
      >
        <MenuSiderLogo>
          {siderLogo}
          <Logo level={5}>{logoText}</Logo>
        </MenuSiderLogo>
        <MenuSiderMenu theme="light" mode="inline">
          {dataSource.map((menuItem) => (
            <MenuSiderMenuItem key={menuItem.key}>
              <MenuItem key={menuItem.key}>
                <MenuLink linkData={menuItem} href={menuItem.href} />
              </MenuItem>
            </MenuSiderMenuItem>
          ))}
        </MenuSiderMenu>
      </MenuSider>
      <MenuSiderOverlay show={!collapsed} onClick={closeSider} />
    </Menu>
  );
};

export default Header;
