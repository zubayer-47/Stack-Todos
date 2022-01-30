import React, { useContext } from "react";
import { Context } from "./Context/Context";

export default function Search() {
  const {setState, state} = useContext(Context);

  const handleSearch = (e) => {
    const text = e.target.value;
    setState({
      type: "SEARCH",
      value: {
        searchTerm: text
      }
    });
  };
  
  return (
    <div className="flex justify-between gap-2">
      <input
        className="w-full border rounded-sm px-1 py-1 focus:outline-green-200 bg-slate-50 text-gray-700"
        placeholder="Enter Search Text"
        value={state.searchTerm}
        name="search"
        onChange={handleSearch}
      />

      <button onClick={e => setState({type: "OPEN_MODAL"})} className="bg-green-500 text-gray-50 hover:bg-green-600 px-2 py-1 rounded-sm">
        Create
      </button>
    </div>
  );
}
