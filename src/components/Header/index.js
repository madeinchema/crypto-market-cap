/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Menu as AntdMenu } from 'antd';
import { useState } from 'react';
import {
  Container,
  Logo,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
  MenuSider,
  MenuSiderLogo,
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

  return (
    <Menu {...restProps}>
      <MenuButton onClick={openSider}>Menu</MenuButton>
      <MenuList gutter={24}>
        {dataSource.map((menuItem) => (
          <MenuItem key={menuItem.key}>
            <MenuLink disabled={menuItem.disabled} href={menuItem.href}>
              {menuItem.label}
            </MenuLink>
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
        <AntdMenu theme="light" mode="inline">
          {dataSource.map((menuItem) => (
            <AntdMenu.Item key={menuItem.key}>
              <MenuLink disabled={menuItem.disabled} href={menuItem.href}>
                {menuItem.label}
              </MenuLink>
            </AntdMenu.Item>
          ))}
        </AntdMenu>
      </MenuSider>
    </Menu>
  );
};

export default Header;
