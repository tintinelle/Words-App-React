import style from './header.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.appname}>
        <img className={style.logo} src="images/logo.png" alt="logo"/>
        <div className={style.text}>
          <p>Learn it!</p>
          <p>English vocabulary cards</p>
        </div>
      </div>

      <nav className={style.nav}>
        <li>Home</li>
        <li>Wordlist</li>
        <li>Game</li>
      </nav>
    </header>
  )
}
