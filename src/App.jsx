import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import CoinsRanking from './pages/CoinsRanking/CoinsRanking';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const { Content } = Layout;

const appStyles = {
  layout: { minHeight: '100vh', position: 'relative' },
  content: { padding: '0 3rem', marginTop: '3rem', marginBottom: '5.25rem' },
};

const App = () => {
  const [currency, setCurrency] = useState('usd');

  return (
    <Router>
      <Layout style={appStyles.layout}>
        <Header />

        <Content style={appStyles.content}>
          <Switch>
            <Route exact path="/">
              <CoinsRanking currency={currency} />
            </Route>
            <Route exact path="/exchanges">
              Exchanges
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </Content>

        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
