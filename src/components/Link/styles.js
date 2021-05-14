import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from 'antd'
import themeColors from '../../theme/colors.module.scss'

const { Link: AntdLink } = Typography

const linkStyles = css`
  font-size: ${p => p.fontSize || '1.2rem'};
  display: block;
  margin-bottom: 0.25rem;
  text-align: ${p => p.align || ''};
  color: ${p => p.colors?.base || themeColors.geekblue7};
  font-weight: 500;
  :hover {
    color: ${p => p.colors?.hover || themeColors.geekblue5};
  }
`

const StyledRouterLink = styled(RouterLink)`
  ${linkStyles}
`

const StyledAntdLink = styled(AntdLink)`
  &.ant-typography {
    ${linkStyles}
  }
`

export { StyledRouterLink, StyledAntdLink }
