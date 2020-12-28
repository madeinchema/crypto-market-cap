/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Container, Logo } from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Logo level={3} {...restProps}>
      {children}
    </Logo>
  );
};

export default Header;
