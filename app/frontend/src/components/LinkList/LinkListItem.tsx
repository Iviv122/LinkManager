import { useState, useRef, useContext } from "react"
import updateLinks from "../../functions/updateLink";
import { RefreshContext } from "../../context/RefreshContext";
import removeLink from "../../functions/Remove";

export default function LinkListItem({ _id, name, url, tag}: { _id: string, name: string, url: string, tag: string}) {
    const [curState, setCurState] = useState(true);

    const newName = useRef<HTMLInputElement>(null);
    const newUrl = useRef<HTMLInputElement>(null);
    const newTag = useRef<HTMLInputElement>(null);

    const {refresh, setRefresh} = useContext(RefreshContext);

    return (
        <div className="flex w-full h-full">
            {
                curState && (
                    <div key={_id} className="flex w-full h-full">
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <p className="text-sm font-normal text-blue-gray-900">{name}</p>
                        </div>
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <a className="text-sm font-normal text-blue-gray-900" href={url}>{url}</a>
                        </div>
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <p className="text-sm font-normal text-blue-gray-900">{tag || "no tags"}</p>
                        </div>
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <button data-ripple-light="true" className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                                type="button"
                                onClick={() => setCurState(!curState)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                )
            }
            {/* else */}
            {
                !curState && (
                    <div key={_id} className="flex w-full h-full">
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <input ref={newName} className="text-sm font-normal text-blue-gray-900 border-1 p-4  " defaultValue={name}></input>
                        </div>
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <input ref={newUrl} className="text-sm font-normal text-blue-gray-900 border-1 p-4" defaultValue={url}></input>
                        </div>
                        <div className="p-4 border-b border-blue-gray-50 flex-1">
                            <input ref={newTag} className="text-sm font-normal text-blue-gray-900 border-1 p-4" defaultValue={tag}></input>
                        </div>
                        <div className="p-4 border-b border-blue-gray-50 flex-1 flex w-full justify-start gap-2">
                            <button data-ripple-light="true" className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={(e) => {
                                    setCurState(!curState);
                                    const newname = newName.current.value
                                    const newurl = newUrl.current.value
                                    const newtag = newTag.current.value

                                    updateLinks({ _id, name : newname, url : newurl,tag: newtag });

                                    setRefresh(!refresh);
                                }}
                            >
                                Confirm
                            </button>
                            <button data-ripple-light="true" className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={() => {
                                    setCurState(!curState)
                                
                                    console.log("Trying to remove")
                                    removeLink({_id})

                                    setRefresh(!refresh)
                                
                                }}
                            >
                                Remove
                            </button>
                            <button data-ripple-light="true" className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={() => {

                                    setCurState(!curState)
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
