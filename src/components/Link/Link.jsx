import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from 'antd';
import themeColors from '../../theme/colors.module.scss';

const { Link: AntdLink } = Typography;

const CMCLink = (props) => {
  const { linkData, fontSize, align, colors } = props;

  const isInternalURL = (path) => {
    const url = new URL(path, window.location.origin);
    const checkIsInternalURL = url.hostname === window.location.hostname;
    return checkIsInternalURL;
  };

  const linkStyles = css`
    font-size: ${fontSize || '1.2rem'};
    display: block;
    margin-bottom: 0.25rem;
    text-align: ${align || ''};
    color: ${colors?.base || themeColors.geekblue7};
    font-weight: 500;
    :hover {
      color: ${colors?.hover || themeColors.geekblue5};
    }
  `;

  const StyledRouterLink = styled(RouterLink)`
    ${linkStyles}
  `;

  const StyledAntdLink = styled(AntdLink)`
    &.ant-typography {
      ${linkStyles}
    }
  `;

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
      target={linkData && linkData.targetBlank && '_blank'}
      rel={linkData && linkData.targetBlank && 'noreferrer'}
    >
      {linkData && linkData.label}
    </StyledAntdLink>
  );
};

CMCLink.propTypes = {
  linkData: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    targetBlank: PropTypes.bool,
  }).isRequired,
  fontSize: PropTypes.string,
  align: PropTypes.string,
  colors: PropTypes.shape({
    base: PropTypes.string,
    hover: PropTypes.string,
  }),
};

CMCLink.defaultProps = {
  fontSize: undefined,
  align: undefined,
  colors: undefined,
};

export { CMCLink as default, CMCLink as Link };
