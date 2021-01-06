/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
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
  const { children, collapsed, onCollapse, linkData, ...restProps } = props;

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
  const { logo, children } = props;
  return (
    <Logo>
      {logo}
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
        <MenuItem key={menuItem.id}>
          <Link linkData={menuItem} href={menuItem.href} />
        </MenuItem>
      ))}
    </Menu>
  );
};

Sider.propTypes = {
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
  linkData: PropTypes.objectOf(Object),
};
Sider.defaultProps = {
  children: undefined,
  collapsed: undefined,
  onCollapse: undefined,
  linkData: undefined,
};

Sider.Overlay.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
};
Sider.Overlay.defaultProps = {
  collapsed: undefined,
  onCollapse: undefined,
};

Sider.Logo.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.node,
};
Sider.Logo.defaultProps = {
  children: undefined,
  logo: undefined,
};

export default Sider;
