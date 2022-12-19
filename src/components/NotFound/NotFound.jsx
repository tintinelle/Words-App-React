import style from './notFound.module.scss';
import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <div className={style.container}>
      <p>Even our greatest detective cannot find the page you are looking for</p>
      <img src="images/404.gif" alt="404"/>
      <div>But you can always 
          <Link to = "/"> go home</Link>
      </div>
      
    </div>

  )
}
