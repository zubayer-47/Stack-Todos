import React, { useReducer } from "react";
import { v4 } from "uuid";
import { Context } from "./Context/Context";

const initialState = {
  searchTerm: "",
  isOpenModal: false,
  isCloseModal: true,
  todos: [
    {
      id: v4(),
      title: "Title 1",
      desc: "Description 1",
      isChangeText: false,
      isChecked: false,
      time: new Date(),
    },
    {
      id: v4(),
      title: "Title 1",
      desc: "Description 1",
      isChangeText: false,
      isChecked: false,
      time: new Date(),
    },
    {
      id: v4(),
      title: "Title 1",
      desc: "Description 1",
      isChangeText: false,
      isChecked: false,
      time: new Date(),
    },
  ],
  isListView: true,
  isTableView: false,
  isAll: true,
  isRunning: false,
  isCompleted: false,
  isCompletedListView: false,
  isCompletedTableView: false,
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
        isCloseModal: false,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isCloseModal: true,
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
        isListView: true,
        isCompletedListView: true,
        isTableView: false,
      };
    case "TABLE":
      return {
        ...state,
        isTableView: true,
        isCompletedTableView: true,
        isCompletedListView: false,
        isListView: false,
      };
    case "ALL":
      return {
        ...state,
        isAll: true,
        isRunning: false,
        isCompleted: false,
      };
    case "RUNNING":
      return {
        ...state,
        isRunning: true,
        isAll: false,
        isCompleted: false,
      };
    case "COMPLETED":
      return {
        ...state,
        isCompleted: true,
        isAll: false,
        isRunning: false,
      };
    case "CLEAR_SELECTED":
      return {
        ...state,
        isClearSelected: true,
        todos: action.value,
        isClearCompleted: false,
        isListView: true,
        isTableView: false,
        isAll: true,
        isRunning: false,
        isCompleted: false,
        isReset: false,
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        isClearCompleted: true,
        isClearSelected: false,
        isReset: false,
      };
    case "RESET":
      return {
        ...state,
        isReset: true,
        todos: [],
        isListView: true,
        isTableView: false,
        isAll: true,
        isRunning: false,
        isCompleted: false,
        isClearSelected: false,
        isClearCompleted: false,
      };
    default:
      return state;
  }
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setState = ({ type, value }) => {
    dispatch({
      type,
      value,
    });
  };

  const handleChecked = (e) => {
    const todos = state.todos.map((todo) => {
      if (todo.id === e.target.id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });

    const clearTodos = state.todos.map(todo => {
      if (todo.isChecked) {
        
      }
    })

    setState({
      type: "CHECKED",
      value: todos,
    });
  };

  const handleClick = (e) => {
    const todos = state.todos.map((todo) => {
      if (todo.id === e.target.id) {
        todo.isChangeText = !todo.isChangeText;
      }
      return todo;
    });

    setState({
      type: "STATUS",
      value: todos,
    });
  };

  return (
    <Context.Provider value={{ state, setState, handleChecked, handleClick }}>
      {props.children}
    </Context.Provider>
  );
}
