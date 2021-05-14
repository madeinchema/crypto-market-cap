import { useEffect, useState } from 'react'
import Logo from '../../assets/Logo'
import { Header } from '../../components'
import headerMenuData from '../Footer/utils/constants/headerData'
import SiderContainer from '../Sider/Sider'
import './header.scss'

const HeaderContainer = () => {
  const [collapsed, setCollapsed] = useState(true)

  const closeSider = () => {
    setCollapsed(true)
  }

  const openSider = () => {
    setCollapsed(false)
  }

  useEffect(() => {
    if (collapsed) {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
    return () => {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    }
  }, [collapsed])

  return (
    <Header>
      <Header.Logo logo={<Logo />}>CoinMarketCap</Header.Logo>

      <Header.Menu
        menuButtonProps={{ openSider }}
        menuListProps={{
          dataSource: headerMenuData,
          breakpoint: 'lg',
          spaceSize: 'middle',
        }}
      />

      <SiderContainer
        dataSource={headerMenuData}
        onCollapse={closeSider}
        collapsed={collapsed}
        logo={<Logo />}
        logoText="CryptoMarketCap"
      />
    </Header>
  )
}

export default HeaderContainer
