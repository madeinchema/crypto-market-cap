import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from 'antd';

const { Link: AntdLink } = Typography;

const Link = (props) => {
  const { linkData } = props;

  const isInternalURL = (path) => {
    const url = new URL(path, window.location.origin);
    const checkIsInternalURL = url.hostname === window.location.hostname;
    return checkIsInternalURL;
  };

  return isInternalURL(linkData && linkData.href) ? (
    <RouterLink
      disabled={linkData && linkData.disabled}
      to={linkData && linkData.href}
    >
      {linkData && linkData.label}
    </RouterLink>
  ) : (
    <AntdLink
      disabled={linkData && linkData.disabled}
      href={linkData && linkData.href}
    >
      {linkData && linkData.label}
    </AntdLink>
  );
};

Link.propTypes = {};

export default Link;
