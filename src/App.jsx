import './App.css'

// React Router
import { Route, Routes } from 'react-router-dom'

// Pages
import { Home } from './pages/home'
import { CountryDetails } from './pages/countryDetails'

// Custom Hooks
import { useCountries } from './hooks/useCountries'

// Components
import { Header } from './components/header'

// Context
import { ThemeContext } from './context/theme'
import { useContext } from 'react'

function App () {
  const { countries } = useCountries()
  const { darkTheme } = useContext(ThemeContext)

  return (
    <>
      <header className={darkTheme ? 'dark' : 'light'}>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':country' element={<CountryDetails countryInfo={countries} />} />
      </Routes>
    </>
  )
}

export default App
