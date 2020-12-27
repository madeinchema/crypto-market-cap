import { Footer } from '../components';
import './footer.scss';

const FooterContainer = () => {
  return (
    <Footer className="footer">
      <Footer.Row justify="space-between">
        <Footer.Col>
          <Footer.Logo>Crypto Market Cap</Footer.Logo>
        </Footer.Col>
      </Footer.Row>

      <Footer.Row justify="space-between">
        <Footer.Col>
          <Footer.Title level={5} className="footer--title">
            © 2021 Crypto Market Cap. All rights reserved.
          </Footer.Title>
        </Footer.Col>
        <Footer.Col className="footer--bottom-bar">
          <Footer.Title level={5} className="footer--title">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/madeinchema"
            >
              @madeinchema
            </a>
          </Footer.Title>
        </Footer.Col>
      </Footer.Row>
    </Footer>
  );
};

export default FooterContainer;
