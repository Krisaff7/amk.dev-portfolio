import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context/AppContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* AppProvider rend le thème et la langue accessibles partout */}
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)