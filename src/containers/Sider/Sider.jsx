import PropTypes from 'prop-types'
import { Menu, Sider } from '../../components'
import Logo from '../../assets/Logo'

const SiderContainer = props => {
  const { dataSource, collapsed, onCollapse } = props

  const siderContainerStyles = {
    menu: {
      padding: '1.15rem',
    },
  }

  return (
    <>
      <Sider
        breakpoint="lg"
        onBreakpoint={onCollapse}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        collapsedWidth={1}
        reverseArrow
        theme="light"
      >
        <Sider.Logo logo={<Logo />}>CoinMarketCap</Sider.Logo>
        <div style={siderContainerStyles.menu}>
          <Menu>
            <Menu.List dataSource={dataSource} direction="vertical" />
          </Menu>
        </div>
      </Sider>
      <Sider.Overlay collapsed={collapsed} onCollapse={onCollapse} />
    </>
  )
}

SiderContainer.propTypes = {
  dataSource: PropTypes.arrayOf(Object),
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
}

SiderContainer.defaultProps = {
  dataSource: undefined,
  collapsed: undefined,
  onCollapse: undefined,
}

export default SiderContainer
