import { Link } from 'react-router-dom'
import './country.css'

import { ThemeContext } from '../context/theme'
import { useContext } from 'react'

export const Country = ({ countries }) => {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className='container'>
      {
      countries.length > 0
        ? countries.map((country) => {
          return (
            <div key={country.numericCode} className={darkTheme ? 'flex flex-col bg-[#2B3945] rounded-md h-92 dark' : 'flex flex-col bg-[#ffffff] rounded-md h-92 light'}>
              <Link to={'/' + country.name}>

                <img src={country.flags.svg} className='h-48 rounded-t-md w-72 ' />
                <h2 className='text-xl'>{country.name}</h2>
                <p><span className='font-bold'>Population:</span> {Intl.NumberFormat().format(country.population)}</p>
                <p><span className='font-bold'>Region:</span> {country.region}</p>
                <p><span className='font-bold'>Capital:</span> {country.capital}</p>
              </Link>

            </div>
          )
        })
        : <p>No Existe ningun pais con estos parametros, vuelve a intentarlo</p>
    }
    </div>
  )
}
