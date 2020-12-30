import styled, { css } from 'styled-components';
import { Row, Col, Typography, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import colors from '../../../theme/colors.module.scss';

const { Title } = Typography;
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

const menuLinkStyles = css`
  display: block;
  margin-bottom: 0.25rem;
  text-align: middle;
  color: ${colors.geekblue7};
  font-weight: 500;
  :hover {
    color: ${colors.geekblue5};
  }
`;

const MenuRouterLink = styled(Link)`
  ${menuLinkStyles}
`;

const MenuLink = styled.a`
  ${menuLinkStyles}
`;

const MenuSider = styled(AntdSider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
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

const MenuSiderMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuSiderMenuItem = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1.15rem;
`;

const MenuSiderOverlay = styled.div`
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: visibility 0.25s ease-out, opacity 0.25s ease-out;
`;

export {
  Container,
  Logo,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuRouterLink,
  MenuLink,
  MenuSider,
  MenuSiderMenu,
  MenuSiderMenuItem,
  MenuSiderLogo,
  MenuSiderOverlay,
};
