import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cấu hình redux
import { BrowserRouter, Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Redux/Reducers/rootReducer";
import reduxThunk from 'redux-thunk'
import { history } from "./Util/history";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
// Cấu hinhg router

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById("root")
);
reportWebVitals();
