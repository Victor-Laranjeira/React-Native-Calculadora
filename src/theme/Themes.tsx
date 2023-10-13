export default function ThemeMode(themeMode: boolean) {
  if (!themeMode) {
    return lightTheme
  } else {
    return darkTheme
  }
}

const lightTheme = {
  primaryBackgroundColor: 'white',
  secondaryBackgroundColor: 'white',
  textColor: 'black',
  secondaryTextColor: '#7D7D7D',
}

const darkTheme = {
  primaryBackgroundColor: '#2A2C2E',
  secondaryBackgroundColor: '#323334',
  textColor: 'white',
  secondaryTextColor: '#7D7D7D',
}