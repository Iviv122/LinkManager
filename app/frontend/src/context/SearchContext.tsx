import React, { createContext, useState } from "react";

export interface LinkItem{
    name: string,
    tag: string,
}

interface SearchContextType {
    search: LinkItem;
    setSearch: React.Dispatch<React.SetStateAction<LinkItem>>
}

export const SearchFieldContext = createContext<SearchContextType>({
    search: {name: "",tag : ""},
    setSearch: ()=>{}
});

interface SearchContextChildren{
    children: React.ReactNode 
}

export const SearchFieldProvider: React.FC<SearchContextChildren> = ({ children }) => {
    const [search, setSearch] = useState({name: "", tag: ""});

    return (
        <SearchFieldContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchFieldContext.Provider>
    );
};
