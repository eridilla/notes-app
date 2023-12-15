import './App.css';
import Header from './components/Header/Header.jsx';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import Notes from './components/Notes/Notes.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'Kalam',
  },
  palette: {
    stickynote: {
      green: '#cdfc93',
      pink: '#ff7ecd',
      cyan: '#71d7ff',
      purple: '#ce81ff',
      yellow: '#fff68b',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction='column' justifyContent='flex-start' alignItems='center' spacing={2}>
        <Header />
        <Notes />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
