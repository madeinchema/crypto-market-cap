import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', position: 'relative' }}>
        <Header />

        <Content
          style={{ padding: '0 50px', marginTop: 48, marginBottom: '84px' }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
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
}

export default App;
