import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAp30ysQ5f22BT3JAaIt1FFKSx5iMHZbbU";

/**
 * Create a new component.
 * This component should produce some HTML.
 */
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

/**
 * Take this component's generated DOM
 * and put it on the page (in DOM)
 */
ReactDOM.render(<App />, document.querySelector(".container"));
