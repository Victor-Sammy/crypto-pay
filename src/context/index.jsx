/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context'

export default function AppProviders({ children }) {
  return (
    <React.StrictMode>
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    </React.StrictMode>
  )
}
