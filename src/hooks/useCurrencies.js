import { useState, useEffect } from 'react'
export function useCurrencies (country, countryClicked) {
  const [money, setMoney] = useState([])

  function getMoney (money) {
    money.map((len) => {
      setMoney((prevLeng) => [...prevLeng, len.name])
      return null
    })
  }

  useEffect(() => {
    setMoney([])
    getMoney(countryClicked[0].currencies)
  }, [country])
  return { money }
}
