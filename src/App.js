import React from 'react'
import ConfigurationController from './components/ConfigurationController'
import {ContextProvider} from './context/ConfigurationContext'
import Layout from './components/Layout'
import './App.css'

const App = () => (
  <div className="app-bg-container">
    <ContextProvider>
      <ConfigurationController />
      <Layout />
    </ContextProvider>
  </div>
)

export default App
