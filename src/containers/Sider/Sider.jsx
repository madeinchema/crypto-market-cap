import { Sider } from '../../components';
import Logo from '../../assets/Logo';

const SiderContainer = (props) => {
  const { dataSource, collapsed, onCollapse } = props;

  return (
    <>
      <Sider
        breakpoint="lg"
        onBreakpoint={onCollapse}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        collapsedWidth={1}
        reverseArrow
        theme="light"
      >
        <Sider.Logo siderLogo={<Logo />}>CoinMarketCap</Sider.Logo>
        <Sider.Menu dataSource={dataSource} />
      </Sider>
      <Sider.Overlay collapsed={collapsed} onCollapse={onCollapse} />
    </>
  );
};

SiderContainer.propTypes = {};

export default SiderContainer;
