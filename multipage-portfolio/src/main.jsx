import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from './contexts/ThemeContext' 
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
)
