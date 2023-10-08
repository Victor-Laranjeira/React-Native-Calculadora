import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native';
import ThemeMode from '../theme/Themes';
//import ThemeMode from '../themes/themes'

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextType {
  isDarkMode: boolean
  themeObject: {}
  //toggleDarkMode: (theme: boolean) => void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(null)
  const [themeObject, setThemeObject] = useState({})
  const colorScheme = useColorScheme()

  useEffect(() => {
    colorScheme === 'light' ? setIsDarkMode(false) : setIsDarkMode(true)
    setThemeObject(ThemeMode(isDarkMode))
  }, [colorScheme])

  // useEffect(() => {
  //   setThemeObject(ThemeMode(isDarkMode))
  // }, [isDarkMode])

  return(
    <ThemeContext.Provider value={{ isDarkMode, themeObject }}>
      {children}
    </ThemeContext.Provider>
  )
}