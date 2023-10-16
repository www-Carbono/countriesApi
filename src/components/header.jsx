import moonIcon from '../assets/moon-outline.svg'
import sunIcon from '../assets/sunny-sharp.svg'

import { ThemeContext } from '../context/theme'
import { useContext } from 'react'

export const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  return (
    <>
      <h1 className='text-xl font-bold'>Where in the world?</h1>
      <div className='flex items-center' onClick={() => setDarkTheme(!darkTheme)}>
        <img src={darkTheme ? sunIcon : moonIcon} className='themeIcon' />
        <p className='-ml-3'>{darkTheme ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </>
  )
}
