import styled from 'styled-components';
import { Row as AntdRow, Col as AntdCol, Typography, Layout } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title: AntdTitle, Link: AntdLink } = Typography;
const { Footer } = Layout;

const Container = styled(Footer)``;

const Row = styled(AntdRow)``;

const Col = styled(AntdCol)``;

const Logo = styled(AntdTitle)`
  &.ant-typography {
    margin: 0;
  }
`;

const Title = styled(AntdTitle)`
  &.ant-typography {
    margin-bottom: 1rem;
  }
`;

const Link = styled(AntdLink)`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  &.ant-typography {
    color: ${colors.geekblue7};
    &:hover {
      color: ${colors.geekblue5};
    }
  }
`;

const Break = styled.div`
  margin-bottom: 2rem;
  height: 0;
`;

const Menu = styled.div``;

export { Container, Row, Col, Logo, Title, Link, Break, Menu };
