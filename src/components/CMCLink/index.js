import PropTypes from 'prop-types';
import { StyledAntdLink, StyledRouterLink } from './styles/cmc-link';

const CMCLink = (props) => {
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
};

export default CMCLink;
