import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
