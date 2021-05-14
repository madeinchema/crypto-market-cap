import styled from 'styled-components'
import { Typography, Layout } from 'antd'
import colors from '../../../theme/colors.module.scss'

const { Title: AntdTitle } = Typography
const { Footer } = Layout

const Container = styled(Footer)``

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  .ant-typography {
    padding-left: 0.5rem;
    display: inline-block;
  }
  .logo--text {
  }
`

const LogoText = styled(AntdTitle)`
  &.ant-typography {
    color: ${colors.gray10};
    margin: 0;
  }
`

const Title = styled(AntdTitle)`
  &.ant-typography {
    margin-bottom: 1rem;
  }
`

const Break = styled.div`
  margin-bottom: 2rem;
  height: 0;
`

const Menu = styled.div``

export { Container, Logo, LogoText, Title, Break, Menu }
