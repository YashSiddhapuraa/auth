import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import FirebaseProvider from "./Context/Firebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </React.StrictMode>
  </Provider>
);
