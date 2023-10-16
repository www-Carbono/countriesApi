import countriesData from '../data.json'
import { useState, useEffect } from 'react'

export function useCountries () {
  const countriesInfo = countriesData
  const [countries, setCountries] = useState(countriesInfo)
  const [region, setRegion] = useState([])
  // Funcion Para Obtener todas las regiones existentes (no lo hacemos manualmente por si en un futuro existen cambios)
  function getRegion () {
    countries.map((country) => {
      setRegion((prevRegion) => Array.from(new Set([...prevRegion, country.region])))
      return region
    })
  }

  function filterPerRegion (region) {
    if (region === 'All') { setCountries(countriesInfo); return }
    const results = countriesInfo.filter(country => country.region === region)
    setCountries(results)
  }

  function filterPerSearch (input) {
    const inputData = input.toString()
    if (inputData.length < 1) return
    const results = countriesInfo.filter((country) => country.name.toLowerCase().includes(inputData.toLowerCase()))
    setCountries(results)
  }

  useEffect(() => {
    getRegion()
  }, [])

  return { countries, region, filterPerRegion, filterPerSearch }
}
