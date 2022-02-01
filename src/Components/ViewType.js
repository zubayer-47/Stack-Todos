import React, { useContext } from "react";
import { Context } from "./Context/Context";

export default function ViewType() {
  const { state, setState } = useContext(Context);

  return (
    <div className="w-3/12 flex justify-center items-center gap-3">
      <p>
        <input
          onChange={(e) => setState({ type: "VIEW", value: "list" })}
          checked={state.view === 'list' ? true : false}
          type="radio"
          id="listView"
        />
        <label htmlFor="listView">List View</label>
      </p>
      <p>
        <input
          onChange={(e) => setState({ type: "VIEW", value: "table" })}
          checked={state.view === 'table' ? true : false}
          type="radio"
          id="tableView"
        />
        <label htmlFor="tableView">Table View</label>
      </p>
    </div>
  );
}
