import React, { useContext } from "react";
import CompletedListView, { CompletedTableView } from "./Completed";
import { Context } from "./Context/Context";
import ListView from "./ListView";
import TableView from "./TableView";

export default function View() {
  const {state} = useContext(Context)
  const renderTableView = () => {
    if (state.isListView) {
      return <ListView />;
    } else if (state.isTableView) {
      return <TableView />;
    }
  };

  const renderTableControllView = () => {
    if (state.isCompleted && state.isCompletedListView) {
      return <CompletedListView />;
    } else if (state.isCompleted && state.isCompletedTableView) {
      return <CompletedTableView />;
    }
  };

  console.log(state.isCompletedListView || state.isCompletedTableView ? 'Control' : 'View');

  return (
    <>
      {state.isCompletedListView || state.isCompletedTableView
        ? renderTableControllView()
        : renderTableView()}
    </>
  );
}
