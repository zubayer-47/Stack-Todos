import React, { useContext } from "react";
import { Context } from "./Context/Context";

export default function ListView() {
  const { state, handleChecked, handleClick } = useContext(Context);

  return (
    <div className="max-w-4xl mx-auto border">
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 border-b"
          >
            <div className="font-mono">
              <div className="flex items-center gap-5">
                <input
                  type="checkbox"
                  checked={todo.isChecked}
                  id={todo.id}
                  onChange={e => handleChecked(e)}
                />
                <p className="text-lg">{todo.title}</p>
              </div>
              <div className="ml-9">
                <p className="text-slate-800">{todo.desc}</p>
                <p className="text-sm text-slate-400">
                  {todo.time.toDateString()}
                </p>
              </div>
            </div>
            <button
              className={`py-1 px-3 ${
                !todo.isChangeText ? "bg-green-500" : "bg-red-500"
              } text-slate-100 font-serif border-r rounded-sm focus:rounded-md`}
              onClick={e => handleClick(e)}
              id={todo.id}
            >
              {!todo.isChangeText ? "Running" : "Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
