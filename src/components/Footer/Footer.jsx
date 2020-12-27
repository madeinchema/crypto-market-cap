/* eslint-disable react/jsx-props-no-spreading */
import { Layout, Typography, Row, Col } from 'antd';

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
    <Title level={3} className="footer--logo" {...restProps}>
      {children}
    </Title>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return (
    <Title className="footer--title" {...restProps}>
      {children}
    </Title>
  );
};

export default Footer;
