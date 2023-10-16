// Custom Hooks
import { useCountries } from '../hooks/useCountries'

// Componentes
import { Filters } from '../components/filters'
import { Country } from '../components/country'

// Context
import { ThemeContext } from '../context/theme'
import { useContext } from 'react'

export const Home = () => {
  const { darkTheme } = useContext(ThemeContext)

  const { countries, region, filterPerRegion, filterPerSearch } = useCountries()
  return (
    <>

      <nav>
        <Filters region={region} filterPerRegion={filterPerRegion} filterPerSearch={filterPerSearch} />
      </nav>

      <section className={darkTheme ? 'containerParent dark' : 'containerParent light'}>
        <Country countries={countries} />

      </section>
    </>
  )
}
