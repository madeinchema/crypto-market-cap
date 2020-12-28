import styled from 'styled-components';
import { Row, Col, Typography, Layout } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title, Link } = Typography;
const { Sider: AntdSider } = Layout;

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

const Menu = styled.div``;

const MenuButton = styled.button`
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

const MenuSider = styled(AntdSider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
`;

export {
  Container,
  Logo,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuLink,
  MenuSider,
};
