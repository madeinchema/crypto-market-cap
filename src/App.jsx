import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';
import CoinsRanking from './pages/CoinsRanking/CoinsRanking';
import FooterContainer from './containers/Footer/Footer';
import HeaderContainer from './containers/Header/Header';

import './app.scss';
import theme from './theme/theme';

const { Content } = Layout;

const App = () => {
  const [currency] = useState('usd');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <HeaderContainer />
        <Layout>
          <Content className="app--content">
            <Switch>
              <Route exact path="/">
                <CoinsRanking currency={currency} />
              </Route>
              <Route exact path="/exchanges">
                Exchanges
              </Route>
              <Route path="/cryptocurrencies">
                <Redirect to="/" />
              </Route>
              <Route path="*">404</Route>
            </Switch>
          </Content>
          <FooterContainer />
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
