import styled from 'styled-components';
import { Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from '../..';

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
