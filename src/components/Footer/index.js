/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Container,
  Row,
  Col,
  Logo,
  Title,
  Link,
  Break,
  Menu,
} from './styles/footer';

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Col = function FooterCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};

Footer.Logo = function FooterLogo({ children, ...restProps }) {
  return (
    <Logo level={3} {...restProps}>
      {children}
    </Logo>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Menu = function FooterMenu({ children, dataSource, ...restProps }) {
  return (
    <Menu>
      <Title level={4} {...restProps}>
        {dataSource.label}
      </Title>
      {dataSource.data.map((menuItem) => (
        <Link
          disabled={menuItem.disabled}
          href={menuItem.href}
          key={menuItem.key}
        >
          {menuItem.label}
        </Link>
      ))}
    </Menu>
  );
};

export default Footer;
