import { createContext, useState } from "react";

export const SearchC = createContext();

function SearchContext(props) {

    const [searchItem, setSearchItem] = useState('')
    // console.log(searchItem)
    return <SearchC.Provider value={[searchItem, setSearchItem]}>{ props.children }</SearchC.Provider>
}

export default SearchContext