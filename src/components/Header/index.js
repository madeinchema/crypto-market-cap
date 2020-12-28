/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Container } from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Header;
