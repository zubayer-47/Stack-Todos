import React, { useContext } from "react";
import { Context } from "./Context/Context";

export default function TableView() {
  const { state, handleChecked, handleClick } = useContext(Context);
  
  return (
    <div className="max-w-4xl mx-auto border">
      <table className="border-collapse w-full font-mono">
        <thead className="text-left">
          <tr className="border-b">
            <th className="p-1 border-r text-center">#</th>
            <th className="p-1 border-r">Title</th>
            <th className="p-1 border-r">Time</th>
            <th className="p-1 border-r">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo) => (
            <tr key={todo.id} className="py-2 px-3 border-b">
                <td className="p-1 border-r text-center"><input
                  type="checkbox"
                  checked={todo.isChecked}
                  id={todo.id}
                  onChange={e => handleChecked(e)}
                /></td>
              <td className="p-1 border-r">{todo.title}</td>
              <td className="p-1 border-r">{todo.time.toDateString()}</td>
              <td className="text-center p-1 border-r"><button
              className={`py-1 px-3 ${
                !todo.isChangeText ? "bg-green-500" : "bg-red-500"
              } text-slate-100 font-serif border-r rounded-sm focus:rounded-md`}
              onClick={handleClick}
              id={todo.id}
            >
              {!todo.isChangeText ? "Running" : "Completed"}
            </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
