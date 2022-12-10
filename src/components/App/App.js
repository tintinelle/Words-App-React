import style from './app.module.scss';
import Header from './../Header/Header';
import Home from './../Home/Home';
import Table from '../Table/Table';
import Game from '../Game/Game';

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <Home/>
      <Game/>
      <Table/>
    </div>
  );
}

export default App;
