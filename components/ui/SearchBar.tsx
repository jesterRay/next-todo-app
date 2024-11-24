import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
const SearchBar = () => {
  return (
    <div className='  flex  bg-white items-center transition-all duration-300 justify-between px-2 rounded shadow-sm focus-within:border focus-within:border-blue-200'>
        <input type='text' placeholder='Search...' className=' max-w-[100px] sm:max-w-[200px] focus:border-0 focus:outline-0 sm:text-sm text-xs sm:px-3 sm:py-2 px-2 py-1'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-blue-500 sm:max-w-[20px] sm:max-h-[20px] max-w-[14px] max-h-[14px]' />
    </div>
  )
}

export default SearchBar
