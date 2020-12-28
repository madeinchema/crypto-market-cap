import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title, Link } = Typography;

const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 64px;
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

const Menu = styled(Row)``;

const MenuButton = styled.button``;

const MenuList = styled(Row)`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Col)``;

const MenuLink = styled(Link)`
  &.ant-typography {
    display: block;
    margin-bottom: 0.25rem;
    text-align: middle;
    color: ${colors.geekblue7};
    font-weight: 500;
    :hover {
      color: ${colors.geekblue5};
    }
  }
`;

export { Container, Logo, Menu, MenuButton, MenuList, MenuItem, MenuLink };
