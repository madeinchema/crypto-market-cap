import styled from 'styled-components';
import { Row, Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title } = Typography;

const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  background-color: ${colors.gray1};
  font-size: 1.1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  .ant-typography {
    padding-left: 0.5rem;
    display: inline-block;
  }
  .logo--text {
  }
`;

const LogoText = styled(Title)`
  &.ant-typography {
    color: ${colors.gray10};
    margin: 0;
  }
`;

export { Container, Logo, LogoText };
