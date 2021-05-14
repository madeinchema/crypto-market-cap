/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import { Menu } from '..'
import { Container, Logo, LogoText } from './styles/header'

const Header = props => {
  const {
    children,
    dataSource,
    siderLogo,
    logoText,
    openSider,
    ...restProps
  } = props
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo(props) {
  const { logo, children } = props
  return (
    <Logo>
      {logo}
      <LogoText level={3}>{children}</LogoText>
    </Logo>
  )
}

Header.Menu = function HeaderMenu({ menuButtonProps, menuListProps }) {
  return (
    <Menu>
      <Menu.Button onClick={menuButtonProps.openSider} {...menuButtonProps} />
      <Menu.List
        dataSource={menuListProps.dataSource}
        breakpoint={menuListProps.breakpoint || 'lg'}
        spaceSize={menuListProps.spaceSize || 'middle'}
        {...menuListProps}
      />
    </Menu>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  dataSource: PropTypes.arrayOf(Object),
  siderLogo: PropTypes.node,
  logoText: PropTypes.string,
  openSider: PropTypes.func.isRequired,
}
Header.defaultProps = {
  children: undefined,
  dataSource: undefined,
  siderLogo: undefined,
  logoText: undefined,
}

Header.Logo.propTypes = {
  logo: PropTypes.node,
  children: PropTypes.node,
}
Header.Logo.defaultProps = {
  logo: undefined,
  children: undefined,
}

Header.Menu.propTypes = {
  menuButtonProps: PropTypes.shape({
    openSider: PropTypes.func,
  }),
  menuListProps: PropTypes.shape({
    dataSource: PropTypes.arrayOf(Object),
    breakpoint: PropTypes.string,
    spaceSize: PropTypes.string,
  }),
}
Header.Menu.defaultProps = {
  menuButtonProps: undefined,
  menuListProps: undefined,
}

export default Header
