import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from 'antd';



function App() {
  return (
    <Router>

      <Switch>
        <Route exact path='/'>
          Home
          <Link to='/cryptos'>
            <Button>Cryptos</Button>
          </Link>
        </Route>
        <Route exact path='/cryptos'>
          Cryptos
          <Link to='/'>
            <Button>Home</Button>
          </Link>
        </Route>
        <Route path='*'>
          404
          <Link to='/'>
            <Button>Home</Button>
          </Link>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
