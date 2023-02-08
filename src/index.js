import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App/App';
//mobx
import { Provider } from 'mobx-react';
import WordsStore from "./stores/WordsStore";

const stores = {
    WordStore: new WordsStore()
}

// ReactDOM.render(
//     <Provider {...stores}>
//         <App />
//     </Provider>,
//   document.getElementById('root')
// );
// sss

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider {...stores}>
    <App />
  </Provider>
  // </React.StrictMode>
);

