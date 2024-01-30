import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomProvider from './context/CustomCursor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomProvider>
    <App />
  </CustomProvider>,
)
