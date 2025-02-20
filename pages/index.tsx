import type { NextPage } from 'next';
import { UserProvider } from '../contexts/Usercontext';
import UserManagement from '../pages/components/UserManagement';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <UserManagement />
      </UserProvider>
    </ThemeProvider>
  );
};

export default Home;