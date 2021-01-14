/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Menu } from '..';
import {
  Container,
  Link,
  Logo,
  LogoText,
  // Menu,
  // MenuItem,
  Overlay,
} from './styles/sider';

const Sider = ({ children, collapsed, onCollapse, linkData, ...restProps }) => {
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

Sider.Overlay = function SiderOverlay({ collapsed, onCollapse, ...restProps }) {
  return <Overlay {...restProps} show={!collapsed} onClick={onCollapse} />;
};

Sider.Logo = function SiderLogo({ logo, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      {logo}
      <LogoText level={5}>{children}</LogoText>
    </Logo>
  );
};

Sider.Link = function SiderLink({ linkData, ...restProps }) {
  return <Link linkData={linkData} href={linkData.href} {...restProps} />;
};

Sider.Menu = function SiderMenu({ dataSource, ...restProps }) {
  return <Menu.List dataSource={dataSource} />;
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

Sider.Link.propTypes = {
  linkData: PropTypes.shape({
    href: PropTypes.string,
  }),
};
Sider.Link.defaultProps = {
  linkData: undefined,
};

Sider.Menu.propTypes = {
  dataSource: PropTypes.arrayOf(Object),
};
Sider.Menu.defaultProps = {
  dataSource: undefined,
};

export default Sider;
