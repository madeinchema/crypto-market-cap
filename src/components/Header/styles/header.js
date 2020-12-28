import styled from 'styled-components';
import { Row, Col, Typography, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import colors from '../../../theme/colors.module.scss';

const { Title, Link } = Typography;
const { Sider: AntdSider } = Layout;

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background-color: ${colors.geekblue1};
  }
`;

const MenuSiderLogo = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 1.15rem;
  .ant-typography {
    padding-left: 0.5rem;
    display: inline-block;
  }
  .logo--text {
  }
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
  MenuSiderLogo,
};
