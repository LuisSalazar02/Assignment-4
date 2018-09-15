import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

// a.1 - Import Browser Router

// a.2 - Create `AppRouter` Component wrapper around <App/> using BrowserRouter

// a.3 - Pass instantiated AppRouter component to

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
