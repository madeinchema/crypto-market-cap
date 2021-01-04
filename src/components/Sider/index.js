/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Container,
  Link,
  Logo,
  LogoText,
  Menu,
  MenuItem,
  Overlay,
} from './styles/sider';

const Sider = (props) => {
  const { children, collapsed, onCollapse, ...restProps } = props;

  return (
    <Container
      breakpoint="lg"
      onBreakpoint={onCollapse}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsedWidth={1}
      reverseArrow
      theme="light"
      {...restProps}
    >
      {children}
    </Container>
  );
};

Sider.Overlay = function SiderOverlay(props) {
  const { collapsed, onCollapse } = props;
  return <Overlay show={!collapsed} onClick={onCollapse} />;
};

Sider.Logo = function SiderLogo(props) {
  const { siderLogo, children } = props;
  return (
    <Logo>
      {siderLogo}
      <LogoText level={5}>{children}</LogoText>
    </Logo>
  );
};

Sider.Link = function SiderLink(props) {
  const { linkData } = props;
  return <Link linkData={linkData} href={linkData.href} />;
};

Sider.MenuItem = function SiderMenuItem(props) {
  const { children, ...restProps } = props;
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

Sider.Menu = function SiderMenu(props) {
  const { dataSource } = props;
  return (
    <Menu>
      {dataSource.map((menuItem) => (
        <MenuItem key={menuItem.key}>
          <Link linkData={menuItem} href={menuItem.href} />
        </MenuItem>
      ))}
    </Menu>
  );
};

Sider.propTypes = {};

export default Sider;
