import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Layout>
          <HeaderContainer />
          <Content className="app--content">
            <Switch>
              <Route exact path={['/', '/currencies']}>
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
      </ThemeProvider>
    </Router>
  );
};

export default App;
