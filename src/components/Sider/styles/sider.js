import styled from 'styled-components';
import { Layout, Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Sider: AntdSider } = Layout;
const { Title } = Typography;

const Container = styled(AntdSider)`
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

const Logo = styled.div`
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

const LogoText = styled(Title)`
  &.ant-typography {
    color: ${colors.gray10};
    margin: 0;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1.15rem;
`;

const Overlay = styled.div`
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

export { Container, Logo, LogoText, Menu, MenuItem, Overlay };
