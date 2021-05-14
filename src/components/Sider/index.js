import { Col, List } from 'antd'
import PropTypes from 'prop-types'
import { Link } from '..'
import { Container, Logo, LogoText, Overlay } from './styles/sider'

const Sider = ({ children, collapsed, onCollapse }) => {
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
    >
      {children}
    </Container>
  )
}

Sider.Overlay = function SiderOverlay({ collapsed, onCollapse }) {
  return <Overlay show={!collapsed} onClick={onCollapse} />
}

Sider.Logo = function SiderLogo({ logo, children }) {
  return (
    <Logo>
      {logo}
      <LogoText level={5}>{children}</LogoText>
    </Logo>
  )
}

Sider.Menu = function SiderMenu(props) {
  const { dataSource } = props
  return (
    <List gutter={24}>
      {dataSource &&
        dataSource.map(menuItem => (
          <Col key={menuItem.id}>
            <Link linkData={menuItem} href={menuItem.href} />
          </Col>
        ))}
    </List>
  )
}

Sider.propTypes = {
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
}
Sider.defaultProps = {
  children: undefined,
  collapsed: undefined,
  onCollapse: undefined,
}

Sider.Overlay.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
}
Sider.Overlay.defaultProps = {
  collapsed: undefined,
  onCollapse: undefined,
}

Sider.Logo.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.node,
}
Sider.Logo.defaultProps = {
  children: undefined,
  logo: undefined,
}

Sider.Menu.propTypes = {
  dataSource: PropTypes.arrayOf(Object),
}
Sider.Menu.defaultProps = {
  dataSource: undefined,
}

export default Sider
