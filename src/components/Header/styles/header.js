import styled from 'styled-components';
import { /* Row as AntdRow, Col as AntdCol, */ Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title } = Typography;

const Container = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 64px;
  align-items: center;
  font-size: 1rem;
  color: ${colors.gray1};
  background-color: ${colors.geekblue10};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Logo = styled(Title)`
  &.ant-typography {
    color: ${colors.gray1};
    margin: 0;
  }
`;

export { Container, Logo };
