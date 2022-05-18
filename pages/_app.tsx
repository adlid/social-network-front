import { CssBaseline } from '@mui/material';
import 'macro-css';
import { ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css'
import {theme} from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}

export default MyApp
