import React, { Component, useContext } from "react";
import { v4 } from "uuid";
import { Context } from "./Context/Context";

export default function Modal() {
  const { state } = useContext(Context);

  return <div>{state.isOpenModal && <SubModal />}</div>;
}

class SubModal extends Component {
  state = {
    id: v4(),
    title: "",
    desc: "",
    isCompleted: false,
    isChecked: false,
    time: new Date(),
  };

  onSubmit = (e, setState) => {
    e.preventDefault();

    const { title, desc, id, isChecked, time, isCompleted } = this.state;

    setState({
      type: "CREATE_TODO",
      value: {
        id,
        title,
        desc,
        isCompleted,
        isChecked,
        time
      },
    });

    setState({ type: "CLOSE_MODAL" });
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, desc } = this.state;
    return (
      <Context.Consumer>
        {({ setState }) => (
          <>
            <div className="z-10 h-screen overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-60"></div>
              <div className="relative max-w-lg mx-auto bg-slate-100 rounded-md shadow-md font-serif py-1 px-1 mt-10 border select-none">
                <div className="flex justify-between py-1 px-5 border-b border-slate-300 rounded-br-md rounded-bl-md">
                  <h1>Create New Todo Item</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-600 rounded-full cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={(e) => setState({ type: "CLOSE_MODAL" })}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <form
                  onSubmit={(e) => this.onSubmit(e, setState)}
                  className="p-5 flex flex-col gap-3 border mt-1 rounded-sm"
                >
                  <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                      className="w-full rounded-sm px-1 bg-slate-50 border outline-0 ring-emerald-200 focus:ring-1"
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="desc">Desc</label>

                    <textarea
                      className="w-full rounded-sm px-1 bg-slate-50 border outline-0 ring-emerald-200 focus:ring-1"
                      name="desc"
                      value={desc}
                      onChange={this.handleChange}
                      id="desc"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>

                  <input
                    type="submit"
                    value="Create"
                    className="w-full bg-green-500 text-gray-50 hover:bg-green-600 px-2 py-1 rounded-sm"
                  />
                </form>
              </div>
            </div>
          </>
        )}
      </Context.Consumer>
    );
  }
}
