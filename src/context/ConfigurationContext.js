import React, {useState, createContext} from 'react'

export const ConfigurationContext = createContext()

export const ContextProvider = ({children}) => {
  const [showContent, setShowContent] = useState(true)
  const [showLeftNavbar, setShowLeftNavbar] = useState(true)
  const [showRightNavbar, setShowRightNavbar] = useState(true)
  return (
    <ConfigurationContext.Provider
      value={{
        showContent,
        setShowContent,
        showLeftNavbar,
        setShowLeftNavbar,
        showRightNavbar,
        setShowRightNavbar,
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  )
}
