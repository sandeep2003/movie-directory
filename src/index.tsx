import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const container: any = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
const store = configureStore({});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
