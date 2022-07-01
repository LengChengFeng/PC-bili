import ReactDOM from "react-dom/client";
import App from "./views/App";

import "normalize.css";
import "antd/dist/antd.css";

// import StoreContext from "./views/counter/context.jsx";
import { Provider } from "react-redux";
import store from "./store1";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>
  <Provider store={store}>
    <App />
  </Provider>
);
