import React from "react";
import Controller from "./Components/Controller";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Provider from "./Components/Provider";
import View from "./Components/View";

function App() {
  return (
    <Provider>
      <div className="bg-slate-100 h-screen overflow-hidden">
        <Modal />

        <div className="absolute top-0 w-full">
          <Header />
          <Controller />
          <View />
        </div>
      </div>
    </Provider>
  );
}

export default App;
