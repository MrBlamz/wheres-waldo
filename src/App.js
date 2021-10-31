import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
