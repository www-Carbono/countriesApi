import './filters.css'

import { ThemeContext } from '../context/theme'
import { useContext } from 'react'

export const Filters = ({ region, filterPerRegion, filterPerSearch }) => {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <form className='flex flex-col items-center justify-between lg:flex-row lg:mx-[5%]'>
      <input type='text' placeholder='Search For Country' onChange={(e) => filterPerSearch(e.target.value)} className={darkTheme ? 'flex rounded-md dark w-[80%] lg:w-[50%]' : 'flex rounded-md light w-[80%] lg:w-[50%]'} />
      <select className={darkTheme ? 'flex rounded-md dark' : 'flex rounded-md light'} onChange={(e) => filterPerRegion(e.target.value)()}>
        <option hidden>Select Region</option>
        <option>All</option>
        {
      region.length > 0 && region.map((site) => {
        return (
          <option key={site} value={site}>{site}</option>
        )
      })
    }
      </select>
    </form>

  )
}

// flex flex-row items-center justify-between mx-[7%]
