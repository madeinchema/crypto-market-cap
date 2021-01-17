import styled from 'styled-components';
import { Typography, Layout } from 'antd';

const { Title: AntdTitle } = Typography;
const { Footer } = Layout;

const Container = styled(Footer)``;

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

const Break = styled.div`
  margin-bottom: 2rem;
  height: 0;
`;

const Menu = styled.div``;

export { Container, Logo, Title, Break, Menu };
