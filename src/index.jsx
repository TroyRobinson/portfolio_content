// This is the entry point for both Vite & Utopia, through either respective index.html file.
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'

const rootElement = document.getElementById('root')
if (rootElement != null) {
  const root = createRoot(rootElement)
  root.render(<App />)
}
