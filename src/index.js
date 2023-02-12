import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App/App';
import { Provider } from 'mobx-react';
import WordsStore from "./stores/WordsStore";

const stores = {
    WordsStore: new WordsStore()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider {...stores}>
    <App />
  </Provider>
  // </React.StrictMode>
);

