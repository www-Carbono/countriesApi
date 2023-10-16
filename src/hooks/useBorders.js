import { useEffect, useState } from 'react'

export function useBorders (country, countryInfo) {
  const [borders, setBorders] = useState([])
  const [bordersName, setBordersName] = useState([])

  // Tengo que guardar en un array los borders de la country que viene y buscar en el array completo (countryInfo) por los valores de "Alpha3"
  function getBorders () {
    setBorders([])
    setBordersName([])
    const countryClicked = countryInfo.filter((countryFilter) => countryFilter.name === country)
    countryClicked[0].borders?.map((border) => {
      setBorders((prevBorder) => [...prevBorder, border])
      return borders
    })
  }

  useEffect(() => {
    getBorders(country)
  }, [countryInfo, country]) // Add countryInfo and country to the dependency array

  useEffect(() => {
    borders.map((border) => {
      const a = countryInfo.filter((countryFilter) => countryFilter.alpha3Code === border)
      a.map(b => {
        setBordersName((prevBorder) => [...prevBorder, b.name])
        return null
      })

      return null
    })
  }, [borders]) // Add borders to the dependency array

  return { bordersName }
}
