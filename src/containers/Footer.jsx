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

      <Footer.Break className="footer--break" />

      <Footer.Row justify="space-between">
        <Footer.Col span={8}>
          <Footer.Title level={4} className="footer--title">
            Products
          </Footer.Title>
          <Footer.Link href="#">Cryptocurrencies</Footer.Link>
          <Footer.Link href="#">Exchanges</Footer.Link>
          <Footer.Link href="#">Compare</Footer.Link>
          <Footer.Link href="#">Converter</Footer.Link>
          <Footer.Link href="#">Repository</Footer.Link>
        </Footer.Col>
        <Footer.Col span={8}>
          <Footer.Title level={4} className="footer--title">
            Development
          </Footer.Title>
          <Footer.Link href="#">React</Footer.Link>
          <Footer.Link href="#">CoinGecko API</Footer.Link>
          <Footer.Link href="#">Ant Design</Footer.Link>
          <Footer.Link href="#">Axios</Footer.Link>
          <Footer.Link href="#">React Virtualized</Footer.Link>
        </Footer.Col>
        <Footer.Col span={8}>
          <Footer.Title level={4} className="footer--title">
            Other projects
          </Footer.Title>
          <Footer.Link href="#">Todolist</Footer.Link>
          <Footer.Link href="#">Finance Tracker</Footer.Link>
          <Footer.Link href="#">Pomodoro App</Footer.Link>
          <Footer.Link href="#">Simple Calculator</Footer.Link>
          <Footer.Link href="#">Personal Portfolio</Footer.Link>
        </Footer.Col>
      </Footer.Row>

      <Footer.Break className="footer--break" />

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
