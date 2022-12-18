import style from './header.module.scss';
import {NavLink, Link} from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.appname}>
        
        <Link className={style.logo} to = "/">
          <img src="images/logo.png" alt="logo"/>
        </Link>

        <div className={style.text}>
          <div>Learn it!</div>
          <div>English vocabulary cards</div>
        </div>
      </div>

      <nav className={style.nav}>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/wordlist">Wordlist</NavLink></li>
        <li><NavLink to = "/game">Game</NavLink></li>
      </nav>
    </header>
  )
}



