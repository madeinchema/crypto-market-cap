import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const Container = styled.div``;

const Button = styled(MenuOutlined)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const List = styled(Space)`
  @media (max-width: ${(props) => props.theme.breakpoints[props.breakpoint]}) {
    display: none;
  }
`;

export { Container, Button, List };
