/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Menu } from '..';
import { Container, Logo, LogoText } from './styles/header';

const Header = (props) => {
  const {
    children,
    dataSource,
    siderLogo,
    logoText,
    openSider,
    ...restProps
  } = props;
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo(props) {
  const { logo, children } = props;
  return (
    <Logo>
      {logo}
      <LogoText level={3}>{children}</LogoText>
    </Logo>
  );
};

Header.Menu = function HeaderMenu({
  menuProps,
  menuButtonProps,
  menuListProps,
}) {
  return (
    <Menu {...menuProps}>
      <Menu.Button onClick={menuButtonProps.openSider} {...menuButtonProps} />
      <Menu.List
        dataSource={menuListProps.dataSource}
        breakpoint={menuListProps.breakpoint || 'lg'}
        spaceSize={menuListProps.spaceSize || 'middle'}
        {...menuListProps}
      />
    </Menu>
  );
};

export default Header;
