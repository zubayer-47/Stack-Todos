import React, { useContext } from "react";
import { Context } from "./Context/Context";
import ListView from "./ListView";
import TableView from "./TableView";

export default function View() {
  const { state, handleSearchTerm, handleFilter } = useContext(Context);

  const view = () => {
    let todos = handleSearchTerm(state);
    todos = handleFilter(todos);

    return (
      <>
        {state.view === "list" ? (
          <ListView todos={todos} />
        ) : (
          <TableView todos={todos} />
        )}
      </>
    );
  };

  return <>{view()}</>;
}
