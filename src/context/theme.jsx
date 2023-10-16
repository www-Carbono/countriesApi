import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProviders ({ children }) {
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = window.localStorage.getItem('theme')
    return theme ? JSON.parse(theme) : true
  })

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }

    window.localStorage.setItem('theme', JSON.stringify(darkTheme))
  }, [darkTheme])

  const theme = {
    darkTheme,
    setDarkTheme
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
