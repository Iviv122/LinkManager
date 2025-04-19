import { useContext, useEffect, useState } from "react";
import { LinkItem, SearchFieldContext } from "../../context/SearchContext";
import getLinks from "../../functions/getLinks";
import LinkListItem from "./LinkListItem";
import { RefreshContext } from "../../context/RefreshContext";

export default function LinksList() {
  const { search } = useContext(SearchFieldContext);
  const [data, setData] = useState<Object[]>([]);
  const [err, setErr] = useState("")

  const {refresh, setRefresh} = useContext(RefreshContext);

  useEffect(() => {
    fetch("http://localhost:3000/items").then(res => res.json()).then(data => setData(data)).catch(err => {setErr(String(err)); setData({name: "No Data"})});
    console.log(data);

  }, [refresh]);

  const filteredData = data.filter((item) => {
    
    const name = item.name ?? "";
    var tag = (item.tag ?? "") || "";
    return (
      name.toLowerCase().includes(search.name.toLowerCase()) &&
      tag.toLowerCase().includes(search.tag.toLowerCase())
    );
  });
  

  return (
      <div className="min-w-full max-w-full w-full flex flex-col">
          {filteredData.map((item) => (
            <LinkListItem
             key={item._id}
              _id={item._id} name={item.name} url={item.url} tag={item.tag}
            />
          ))}
            <h1 className="text-center p-5">
              {
                err
              }
            </h1> 
      </div>
  );
}
