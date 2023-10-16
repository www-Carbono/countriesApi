// Components
import { CountryInfo } from '../components/countryInfo'

import arrow from '../assets/arrow-back-sharp.svg'
import arrowLight from '../assets/arrow-back-sharp-light.svg'

// Router
import { useNavigate } from 'react-router-dom'

// Context

import { ThemeContext } from '../context/theme'
import { useContext } from 'react'

export const CountryDetails = ({ countryInfo }) => {
  const navigate = useNavigate()
  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className={darkTheme ? 'CountryInfoDetails dark' : 'CountryInfoDetails light'}>
      <button className={darkTheme ? 'dark flex flex-row-reverse items-center justify-center px-10 py-2 text-sm buttonBack mx-4 mb-10' : 'flex flex-row-reverse items-center justify-center px-10 py-2 text-sm buttonBack light mx-4 mb-10'} onClick={() => navigate('/')}>  Back <img className=' arrowImage' src={darkTheme ? arrow : arrowLight} alt='arrow for back' /></button>
      <CountryInfo countryInfo={countryInfo} />
    </div>
  )
}
