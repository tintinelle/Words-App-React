import style from './app.module.scss';
import Header from './../Header/Header.jsx'
import Home from './../Home/Home.jsx'

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
