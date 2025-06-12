// Export components, hooks, and providers from the auth package

// Assuming AuthProvider.tsx exports an AuthProvider component and a useAuth hook
export { AuthProvider, useAuth } from './hooks/AuthProvider';

// If App.tsx or other files have components/hooks to export, add them here.
// For example, if App.tsx has a LoginButton:
// export { LoginButton } from './App';

// Remove React DOM rendering for the app itself
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/
