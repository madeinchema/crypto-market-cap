import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const { Content } = Layout;

const appStyles = {
  layout: { minHeight: '100vh', position: 'relative' },
  content: { padding: '0 3rem', marginTop: '3rem', marginBottom: '5.25rem' },
};

function App() {
  return (
    <Router>
      <Layout style={appStyles.layout}>
        <Header />

        <Content style={appStyles.content}>
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
