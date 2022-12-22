import './../style/pageHome.scss';
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="home__container">
      <h1 className="home__title">Learn it!</h1>
      <div className="home__about">This is an app for learning and training English vocabulary. You can also use the app to add and edit new words.</div>
      <Link to = "/wordlist" className="home__button">Start</Link>
    </div>
  )
}
