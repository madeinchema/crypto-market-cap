/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Link } from '..'
import { Container, Logo, LogoText, Title, Break, Menu } from './styles/footer'

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Footer.Logo = function FooterLogo(props) {
  const { logo, children } = props
  return (
    <Logo>
      {logo}
      <LogoText level={3}>{children}</LogoText>
    </Logo>
  )
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>
}

Footer.Menu = function FooterMenu({ children, dataSource, ...restProps }) {
  return (
    <Menu>
      <Title level={4} {...restProps}>
        {dataSource.label}
      </Title>
      {dataSource.data.map(menuItem => (
        <Link
          linkData={menuItem}
          disabled={menuItem.disabled}
          href={menuItem.href}
          key={menuItem.id}
        >
          {menuItem.label}
        </Link>
      ))}
    </Menu>
  )
}

export default Footer
