/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { Layout, Typography, Row, Col } from 'antd';
import colors from '../../theme/colors.module.scss';

const { Title, Link } = Typography;

const StyledLink = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  &.ant-typography {
    color: ${colors.geekblue6};
    &:hover {
      color: ${colors.geekblue5};
    }
  }
`;

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
    <Title level={3} {...restProps}>
      {children}
    </Title>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

export default Footer;
