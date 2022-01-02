import React from "react";
import ReactDOM from "react-dom";
import PiratesApp from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PiratesApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
