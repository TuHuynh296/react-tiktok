import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './Lessions/47-ThemeContext';
import { TodoProvider } from './Lessions/48-GlobalStateWithContextAndUseReducer/store';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Lessions/ReduxTutorial/store';
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(new CustomEvent(`lession-${id}`, {
//       detail: `Nội dung comment của lession ${id}`
//     }))
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
