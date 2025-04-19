import { useRef, useContext } from "react";
import { RefreshContext } from "../context/RefreshContext";
import { unstable_ClassNameGenerator } from "@mui/material";
import addLink from "../functions/AddLink";


export default function AddLink() {
  const nameRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);

  const { refresh,setRefresh } = useContext(RefreshContext);

  return (
    <div className="flex gap-2 items-center">
      <input
        ref={nameRef}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Name"
      />
      <input
        ref={urlRef}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="URL"
      />
      <input
        ref={tagRef}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Tag"
      />
      <button
        onClick={(e) => {
            const newname = nameRef.current.value
            const newurl = urlRef.current.value
            const newtag = tagRef.current.value

            addLink({name: newname,url : newurl,tag: newtag });

            nameRef.current.value = "";
            urlRef.current.value = "";
            tagRef.current.value = "";
            setRefresh(!refresh);
            setRefresh(!refresh);
        }}
        className="bg-slate-700 text-white text-sm rounded-md px-4 py-2 hover:bg-slate-600 transition"
      >
        Add
      </button>
    </div>
  );
}
