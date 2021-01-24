import { Col, Row, Typography } from 'antd';
import Logo from '../../assets/Logo';
import { Footer, Link, Menu } from '../../components';
import './footer.scss';
import { footerMenuData, footerBottomData } from './utils/constants/footerData';

const { Title } = Typography;

const FooterContainer = () => {
  return (
    <Footer className="footer">
      <Row justify="space-between">
        <Col>
          <Footer.Logo logo={<Logo />}>CryptoMarketCap</Footer.Logo>
        </Col>
      </Row>

      <Footer.Break />

      <Row justify="space-between" className="footer--menu">
        {Object.keys(footerMenuData).map((section) => (
          <Col xs={24} sm={8} key={section}>
            <Menu>
              <Title level={3}>{footerMenuData[section].label}</Title>
              <Menu.List
                dataSource={footerMenuData[section].data}
                direction="vertical"
                spaceSize="small"
              />
            </Menu>
          </Col>
        ))}
      </Row>

      <Row justify="space-between">
        <Col xs="auto">
          <Footer.Title level={5}>
            © 2021 Crypto Market Cap. All rights reserved.
          </Footer.Title>
        </Col>
        <Col xs="auto">
          <Link
            linkData={footerBottomData.author}
            href={footerBottomData.author.href}
          />
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterContainer;
