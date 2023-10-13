import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native';
import ThemeMode from '../theme/Themes';

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextType {
  isDarkMode: boolean
  themeObject: ThemeColors
}

interface ThemeColors {
  primaryBackgroundColor: string
  secondaryBackgroundColor: string
  textColor: string
  secondaryTextColor: string
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [themeObject, setThemeObject] = useState<ThemeColors>(null)
  const colorScheme = useColorScheme()

  useEffect(() => {
    colorScheme === 'light' ? setIsDarkMode(false) : setIsDarkMode(true)
  }, [colorScheme])

  useEffect(() => {
    setThemeObject(ThemeMode(isDarkMode))
  }, [isDarkMode])

  return(
    <ThemeContext.Provider value={{ isDarkMode, themeObject }}>
      {children}
    </ThemeContext.Provider>
  )
}