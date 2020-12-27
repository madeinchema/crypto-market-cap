import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import CoinsRanking from './pages/CoinsRanking/CoinsRanking';
import { Header } from './components';
import FooterContainer from './containers/Footer';

const { Content } = Layout;

const appStyles = {
  content: {
    padding: '0 3rem',
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
};

const App = () => {
  const [currency, setCurrency] = useState('usd');

  return (
    <Router>
      <Layout>
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
        <FooterContainer />
      </Layout>
    </Router>
  );
};

export default App;
