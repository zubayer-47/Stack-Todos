import React, { useContext } from "react";
import { Context } from "./Context/Context";

export default function ListView({todos}) {
  const { handleChecked, handleClick } = useContext(Context);

  return (
    <div className="max-w-4xl mx-auto border">
      <ul>
        {todos.map((todo) => (
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
                  onChange={e => handleChecked(e.target.id)}
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
                !todo.isCompleted ? "bg-green-500" : "bg-red-500"
              } text-slate-100 font-serif border-r rounded-sm focus:rounded-md`}
              id={todo.id}
              onClick={e => handleClick(e.target.id)}
            >
              {!todo.isCompleted ? "Running" : "Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
