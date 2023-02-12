import style from './app.module.scss';
import Header from './../Header/Header';
import { Home, Table, Game, NotFound } from './../../pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 
// import { useEffect } from 'react';


function App() {

// function App({ wordStore }) {

  // useEffect(() => {
  //   wordStore.loadData();
  // });

  return (
    <Router >    
      <div className={style.app}>
      <Header/>

      <Routes>
        <Route path = "/game" element = {<Game/>}/>
        <Route path = "/wordlist" element = {<Table/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;

// export default inject(['wordStore'])(observer(App));
