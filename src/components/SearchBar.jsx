import { useContext } from 'react'// useEffect, useState
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';


const SearchBar = () => {
    const location = useLocation()
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    if (!location.pathname.includes('collection')) {
        return null
    }

    if (!showSearch) return null

    return (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none bg-inherit text-sm pe-1"
                    type="text"
                    placeholder="Search"
                />
                <img className="w-4" src={assets.search_icon} alt="search" />
            </div>

            <img
                onClick={() => setShowSearch(false)}
                className="inline w-4 cursor-pointer"
                src={assets.cross_icon}
                alt="close"
            />
        </div>
    )
}

export default SearchBar
