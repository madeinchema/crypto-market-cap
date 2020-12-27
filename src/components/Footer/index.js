/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Layout, Typography, Row, Col } from 'antd';
import { Logo, Link, Break } from './styles/footer';

const { Title } = Typography;

const Footer = ({ children, ...restProps }) => {
  return <Layout.Footer {...restProps}>{children}</Layout.Footer>;
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

export default Footer;
