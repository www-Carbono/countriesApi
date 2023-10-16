import { useEffect, useState } from 'react'

export function useLanguages (country, countryClicked) {
  const [languages, setlanguages] = useState([])
  function getlanguagess (languages) {
    languages.map((len) => {
      setlanguages((prevlanguages) => [...prevlanguages, len.name])
      return null
    })
  }

  useEffect(() => {
    setlanguages([])
    getlanguagess(countryClicked[0].languages)
  }, [country])

  return { languages }
}
