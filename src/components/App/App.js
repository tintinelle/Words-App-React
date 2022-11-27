import style from './app.module.scss';
import Header from './../Header/Header.jsx'
import Home from './../Home/Home.jsx'
import Table from '../Table/Table';

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <Home/>
      <Table/>
    </div>
  );
}

export default App;
