import { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchLevels } from './api/apiUtils';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import levels from './data';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLevels()
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home data={data} />
            </Route>
            <Route exact path='/game'>
              <Game data={levels[0]} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
