import React from "react";
import ReactDOM from "react-dom";

import AppWithHooks from "./AppWithHooks";
import AppWithClass from "./AppClass";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithClass />, rootElement);
