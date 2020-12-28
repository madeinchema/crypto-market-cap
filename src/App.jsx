import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import CoinsRanking from './pages/CoinsRanking/CoinsRanking';
import FooterContainer from './containers/Footer/Footer';
import HeaderContainer from './containers/Header/Header';
import './app.scss';

const { Content } = Layout;

const App = () => {
  const [currency] = useState('usd');

  return (
    <Router>
      <Layout>
        <HeaderContainer />
        <Content className="app--content">
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
