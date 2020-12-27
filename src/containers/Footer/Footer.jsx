import { Footer } from '../../components';
import './footer.scss';
import footerMenuData from './utils/constants/footerMenuData';

const FooterContainer = () => {
  return (
    <Footer className="footer">
      <Footer.Row justify="space-between">
        <Footer.Col>
          <Footer.Logo>Crypto Market Cap</Footer.Logo>
        </Footer.Col>
      </Footer.Row>

      <Footer.Break />

      <Footer.Row justify="space-between" className="footer--menu">
        <Footer.Col xs={24} sm={8}>
          <Footer.Menu dataSource={footerMenuData.products} />
        </Footer.Col>
        <Footer.Col xs={24} sm={8}>
          <Footer.Menu dataSource={footerMenuData.development} />
        </Footer.Col>
        <Footer.Col xs={24} sm={8}>
          <Footer.Menu dataSource={footerMenuData.otherProjects} />
        </Footer.Col>
      </Footer.Row>

      <Footer.Row justify="space-between">
        <Footer.Col xs="auto">
          <Footer.Title level={5}>
            © 2021 Crypto Market Cap. All rights reserved.
          </Footer.Title>
        </Footer.Col>
        <Footer.Col xs="auto">
          <Footer.Title level={5}>
            <Footer.Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/madeinchema"
            >
              Made in Chema
            </Footer.Link>
          </Footer.Title>
        </Footer.Col>
      </Footer.Row>
    </Footer>
  );
};

export default FooterContainer;
