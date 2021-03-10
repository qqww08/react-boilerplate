import "regenerator-runtime/runtime";
import "core-js/stable";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import themes from "./styles/themes";
import { ThemeProvider } from "./styles/themed-components";
import GlobalStyle from "./styles/global-styles";
import configureStore from "./createStore";
import App from "@/App";

const store = configureStore();
const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </Provider>,
  rootEl
);
