import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Link: AntdLink } = Typography;

const linkStyles = css`
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
  ${linkStyles}
`;

const StyledAntdLink = styled(AntdLink)`
  &.ant-typography {
    ${linkStyles}
  }
`;

export { StyledRouterLink, StyledAntdLink };
