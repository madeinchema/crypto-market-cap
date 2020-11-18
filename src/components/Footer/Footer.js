import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const Footer = () => {
  return (
    <Layout.Footer
      style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%' }}
    >
      <Row justify='space-between'>
        <Col>
          <Title level={4} style={{ margin: '0 auto' }}>Crypto Market Cap</Title>
        </Col>
        <Col style={{ alignSelf: 'center' }}>
          <Title level={5} style={{ margin: '0 auto' }}>
            <a target='_blank' href="https://github.com/madeinchema">@madeinchema</a>
          </Title>
        </Col>
      </Row>

    </Layout.Footer>
  );
};

export { Footer };
