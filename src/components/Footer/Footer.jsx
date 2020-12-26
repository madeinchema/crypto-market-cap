import { Layout, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const footerStyles = {
  layout: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    margin: '0 auto',
  },
  col2: {
    alignSelf: 'center',
  },
};

const Footer = () => {
  return (
    <Layout.Footer style={footerStyles.layout}>
      <Row justify="space-between">
        <Col>
          <Title level={4} style={footerStyles.title}>
            Crypto Market Cap
          </Title>
        </Col>
        <Col style={footerStyles.col2}>
          <Title level={5} style={footerStyles.title}>
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
