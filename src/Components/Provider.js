import React, { useReducer } from "react";
import { Context } from "./Context/Context";

const initialState = {
  searchTerm: "",
  isOpenModal: false,
  todos: [],
  view: 'list',
  filter: 'all',
  isClearSelected: false,
  isClearCompleted: false,
  isReset: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        todos: [action.value, ...state.todos],
      };
    case "VIEW":
      return {
        ...state,
        view: action.value
      }
    case "CHECKED":
      return {
        ...state,
        todos: action.value
      }
    case "STATUS":
      return {
        ...state,
        todos: action.value
      }
    case "OPEN_MODAL":
      return {
        ...state,
        isOpenModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpenModal: false,
      };
    case "SEARCH":
      return {
        ...state,
        searchTerm: action.value.searchTerm,
      };
    case "LIST":
      return {
        ...state,
        view: action.value
      };
    case "FILTER":
      return {
        ...state,
        filter: action.value
    }
    case "CLEAR_CHECKED":
      return {
        ...state,
        isClearSelected: true,
        todos: action.value,
        isClearCompleted: false,
        isReset: false,
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        isClearCompleted: true,
        todos: action.value,
        isClearSelected: false,
        isReset: false,
      };
    case "RESET":
      return {
        searchTerm: '',
        isOpenModal: false,
        view: 'list',
        filter: 'all',
        todos: [],
        isClearSelected: false,
        isClearCompleted: false,
        isReset: true,
      };
    default:
      return state;
  }
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearchTerm = (state) => {
    return state.todos.filter(todo => todo.title.toLowerCase().includes(state.searchTerm));
  }
  
  const handleFilter = todos => {
    if (state.filter === 'completed') {
      return todos.filter(todo => todo.isCompleted);
    } else if (state.filter === 'running') {
      return todos.filter(todo => !todo.isCompleted);
    }

    return todos;
  };

  const handleChecked = (todoId) => {
    let todos = [...state.todos];
    const todo = todos.find(t => t.id === todoId);
    todo.isChecked = !todo.isChecked;

    dispatch({
      type: "CHECKED",
      value: todos
    })
  }

  const setState = ({ type, value }) => {
    dispatch({
      type,
      value,
    });
  };

  const clearChecked = () => {
    const todos = state.todos.filter(todo => !todo.isChecked);

    dispatch({
      type: "CLEAR_CHECKED",
      value: todos
    });
  };

  const  clearCompleted = () => {
    const todos = state.todos.filter(todo => !todo.isCompleted);

    dispatch({
      type: "CLEAR_COMPLETED",
      value: todos
    });
  }

  const reset = () => {
    dispatch({
      type: "RESET",
      value: []
    });
  };

  const handleClick = todoId => {
    const todos = [...state.todos];
    const todo = state.todos.find(todo => todo.id === todoId);
    todo.isCompleted = !todo.isCompleted;

    dispatch({
      type: "STATUS",
      value: todos,
    });
  };

  return (
    <Context.Provider value={{ state, setState, handleChecked, handleClick, handleSearchTerm, handleFilter, clearChecked, clearCompleted, reset }}>
      {props.children}
    </Context.Provider>
  );
}
