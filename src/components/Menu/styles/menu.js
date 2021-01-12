import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

const Container = styled.div``;

const Button = styled(MenuOutlined)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export { Container, Button, List };
