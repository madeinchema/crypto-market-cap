import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../theme/colors.module.scss';

const { Link: AntdLink } = Typography;

const menuLinkStyles = css`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.25rem;
  text-align: middle;
  color: ${colors.geekblue7};
  font-weight: 500;
  :hover {
    color: ${colors.geekblue5};
  }
`;

const StyledRouterLink = styled(RouterLink)`
  ${menuLinkStyles}
`;

const StyledAntdLink = styled(AntdLink)`
  &.ant-typography {
    ${menuLinkStyles}
  }
`;

const Link = (props) => {
  const { linkData } = props;

  const isInternalURL = (path) => {
    const url = new URL(path, window.location.origin);
    const checkIsInternalURL = url.hostname === window.location.hostname;
    return checkIsInternalURL;
  };

  return isInternalURL(linkData && linkData.href) ? (
    <StyledRouterLink
      disabled={linkData && linkData.disabled}
      to={linkData && linkData.href}
    >
      {linkData && linkData.label}
    </StyledRouterLink>
  ) : (
    <StyledAntdLink
      disabled={linkData && linkData.disabled}
      href={linkData && linkData.href}
    >
      {linkData && linkData.label}
    </StyledAntdLink>
  );
};

Link.propTypes = {};

export default Link;
export { Link };
