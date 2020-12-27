import { Layout, Typography, Row, Col } from 'antd';
import './footer.scss';

const { Title } = Typography;

const Footer = () => {
  return (
    <Layout.Footer className="footer">
      <Row justify="space-between">
        <Col>
          <Title level={5} className="footer--title">
            © 2021 Crypto Market Cap. All rights reserved.
          </Title>
        </Col>
        <Col className="footer--bottom-bar">
          <Title level={5} className="footer--title">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/madeinchema"
            >
              @madeinchema
            </a>
          </Title>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
