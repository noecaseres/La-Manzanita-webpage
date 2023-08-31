import { ThemeProvider } from '@emotion/react';
import { AppRouter } from './router/AppRouter';
import { defaultTheme } from './styles/muiTheme';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter/>
    </ThemeProvider>
  )
}

export default App
