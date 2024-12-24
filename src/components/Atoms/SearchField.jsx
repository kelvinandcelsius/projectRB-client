import { useState } from "react"
import magnifyingGlass from '../../assets/images/magnifying-glass.svg'

const SearchField = ({ children }) => {

    const [searchValue, setSearchValue] = useState("")

    const handleSearch = () => {
        console.log("Searching for:", searchValue)
    }

    return (
        <div className="flex justify-between items-center border border-black rounded-full focus-within:ring-2 focus-within:ring-black">
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-10/12 p-1 md:p-2 rounded-full focus:outline-none"
            />
            <button onClick={handleSearch} className="w-2/12 p-0 pr-2">
                <img src={magnifyingGlass} alt="Search" className="w-4/6 h-4/6" />
            </button>

        </div>
    )
}

export default SearchField