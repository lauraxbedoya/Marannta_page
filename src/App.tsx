import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  )
}

export default App
