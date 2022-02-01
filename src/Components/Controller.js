import React, { useContext } from "react";
import { Context } from "./Context/Context";
import Search from "./Search";
import ViewType from "./ViewType";

export default function Controller() {
  const { setState, clearChecked, clearCompleted, reset } = useContext(Context);
  
  return (
    <div className="max-w-4xl mx-auto">
      <Search />

      <div className="my-3 flex justify-center items-center">
        <div className="w-4/12">
          <button onClick={e => setState({type: "FILTER", value: "all"})} className="w-1/3 py-1 bg-slate-700 text-slate-100 font-serif border-r rounded-sm focus:rounded-md">
            All
          </button>
          <button onClick={e => setState({type: "FILTER", value: "running"})} className="w-1/3 py-1 bg-slate-700 text-slate-100 font-serif border-r rounded-sm focus:rounded-md">
            Running
          </button>
          <button onClick={e => setState({type: "FILTER", value: "completed"})} className="w-1/3 py-1 bg-slate-700 text-slate-100 font-serif border-r rounded-sm focus:rounded-md">
            Completed
          </button>
        </div>

        <ViewType />

        <div className="flex justify-between w-5/12">
          <button onClick={clearChecked} className="w-1/3 py-1 bg-rose-600 text-rose-100 font-serif border-r rounded-sm focus:rounded-md">
            Clear Selected
          </button>
          <button onClick={clearCompleted} className="w-1/3 py-1 bg-rose-600 text-rose-100 font-serif border-r rounded-sm focus:rounded-md">
            Clear Completed
          </button>
          <button onClick={reset} className="w-1/3 py-1 bg-rose-600 text-rose-100 font-serif border-r rounded-sm focus:rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
