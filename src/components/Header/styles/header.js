import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import colors from '../../../theme/colors.module.scss';
import CMCLink from '../../CMCLink';

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

const Logo = styled(Title)`
  &.ant-typography {
    color: ${colors.gray10};
    margin: 0;
  }
`;

const Menu = styled.div``;

const MenuButton = styled(MenuOutlined)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MenuList = styled(Row)`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MenuItem = styled(Col)``;

const MenuLink = styled(CMCLink)``;

export { Container, Logo, Menu, MenuButton, MenuList, MenuItem, MenuLink };
