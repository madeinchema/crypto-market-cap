import { Col, Row } from 'antd';
import { Footer, Link, Menu } from '../../components';
import './footer.scss';
import { footerMenuData, footerBottomData } from './utils/constants/footerData';

const FooterContainer = () => {
  return (
    <Footer className="footer">
      <Row justify="space-between">
        <Col>
          <Footer.Logo>Crypto Market Cap</Footer.Logo>
        </Col>
      </Row>

      <Footer.Break />

      <Row justify="space-between" className="footer--menu">
        <Col xs={24} sm={8}>
          <Menu>
            <Menu.List
              dataSource={footerMenuData.products.data}
              direction="vertical"
            />
          </Menu>
        </Col>
        <Col xs={24} sm={8}>
          <Menu>
            <Menu.List
              dataSource={footerMenuData.development.data}
              direction="vertical"
            />
          </Menu>
        </Col>
        <Col xs={24} sm={8}>
          <Menu>
            <Menu.List
              dataSource={footerMenuData.otherProjects.data}
              direction="vertical"
            />
          </Menu>
        </Col>
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
