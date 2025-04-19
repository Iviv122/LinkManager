import { useContext } from "react"
import { SearchFieldContext } from "../context/SearchContext";

export default function Search(){

    const {search, setSearch} = useContext(SearchFieldContext);

    return (
        <div className="flex max-w-sm">
        <input className="w-full flex-1 grow-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Find by name"
            value={search.name}
            onChange={(e)=>{setSearch({
                ...search,
                name: e.target.value
            })}}

        />
        <input className="w-full flex-1 grow-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Find by tag"
            value={search.tag}
            onChange={(e)=>{setSearch({
                ...search,
                tag: e.target.value
            })}}

        />
        </div>
    );
}