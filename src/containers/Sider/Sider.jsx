import PropTypes from 'prop-types';
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
        <Sider.Logo logo={<Logo />}>CoinMarketCap</Sider.Logo>
        <Sider.Menu dataSource={dataSource} />
      </Sider>
      <Sider.Overlay collapsed={collapsed} onCollapse={onCollapse} />
    </>
  );
};

SiderContainer.propTypes = {
  dataSource: PropTypes.arrayOf(Object),
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
};

SiderContainer.defaultProps = {
  dataSource: undefined,
  collapsed: undefined,
  onCollapse: undefined,
};

export default SiderContainer;
