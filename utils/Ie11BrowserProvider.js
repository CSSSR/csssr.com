import React from 'react'

export const Ie11BrowserContext = React.createContext(false)

export default function Ie11BrowserProvider(props) {
  return (
    <Ie11BrowserContext.Provider value={props.value}>
      {props.children}
    </Ie11BrowserContext.Provider>
  )
}
