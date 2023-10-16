// React Router
import { useParams, Link } from 'react-router-dom'
// Custom Hook
import { useBorders } from '../hooks/useBorders'
import { useCurrencies } from '../hooks/useCurrencies'
import { useLanguages } from '../hooks/useLanguages'
// Context
import { ThemeContext } from '../context/theme'
import { useContext } from 'react'

// css
import '../components/countryInfo.css'

export function CountryInfo ({ countryInfo }) {
  const { country } = useParams()
  const { darkTheme } = useContext(ThemeContext)

  const countryClicked = countryInfo.filter((countryFilter) => countryFilter.name === country)
  const { bordersName } = useBorders(country, countryInfo)
  const { money } = useCurrencies(country, countryClicked)
  const { languages } = useLanguages(country, countryClicked)

  if (countryClicked.length < 1) return <h1>No existe ningun pais con ese nombre.</h1>
  return (
    <div className='flex flex-col gap-10 countryInfo lg:flex-row'>
      <div className='items-center self-start px-4'>

        <img className='w-fit h-fit lg:h-[256px] lg:w-[412px] lg:min-h-[256px] lg:min-w-[412px] lg:max-h-[256px] lg:max-w-[256px] self-start' src={countryClicked[0].flags.svg} alt={countryClicked.name + 'Flag'} />
      </div>
      <div>
        <h1 className='px-4 mb-5 text-4xl md:text-center lg:text-start'>{countryClicked[0].name}</h1>

        <div className='flex flex-col sm:flex-row md:justify-center lg:justify-start'>

          <div>
            <p><span className='font-bold'>Native Name: </span>{countryClicked[0].nativeName}</p>
            <p><span className='font-bold'>Population:</span>{countryClicked[0].population}</p>
            <p><span className='font-bold'>Region: </span>{countryClicked[0].region}</p>
            <p><span className='font-bold'>Sub Region: </span>{countryClicked[0].subregion}</p>
            <p><span className='font-bold'>Capital: </span>{countryClicked[0].capital}</p>
          </div>

          <div className='mt-10 sm:mt-0'>
            <p><span className='font-bold'>TopLevel Domain: </span>{countryClicked[0].topLevelDomain}</p>
            <p><span className='font-bold'>Currences: </span>{money.length > 0 ? money.toString() : null}</p>
            {
      languages.length > 0
        ? <p> <span className='font-bold'>Languages:</span>{languages.toString()}</p>

        : <p> No lenguages</p>
    }
          </div>

        </div>
        <div className='flex flex-col mt-10 md:justify-center lg:justify-start lg:flex-row'>
          {/* // Queda pendiente obtener los nombres completos de los borders */}
          <p className='mb-5 font-bold text-center lg:text-start'>Borders:</p>

          <div className='flex flex-row flex-wrap gap-1'>
            {
    bordersName.length > 0
      ? bordersName.map((border) => {
        return (
          <Link key={border} to={'/' + border}> <p className={darkTheme ? 'px-5 mx-1 border dark' : 'px-5 mx-1 border light'}>{border}</p></Link>
        )
      })
      : <p>No Borders</p>
}
          </div>

        </div>
      </div>

    </div>
  )
}
