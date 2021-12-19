import { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchLevels } from './api/firestore';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedLevelData, setSelectedLevelData] = useState(null);

  const selectLevel = (level) => {
    const levelData = data.find((doc) => doc.level === level);
    setSelectedLevelData(levelData);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchLevels()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home
                data={data}
                selectLevel={selectLevel}
                isLoading={isLoading}
              />
            </Route>
            <Route exact path='/game'>
              <Game data={selectedLevelData} selectLevel={selectLevel} />
            </Route>
            <Route exact path='/leaderboard'>
              <Leaderboard
                data={data}
                selectedLevelData={selectedLevelData}
                selectLevel={selectLevel}
              />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
