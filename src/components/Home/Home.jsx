import style from './home.module.scss';

export default function Home() {
  return (
    <div className={style.home}>
      <h1 className={style.title}>Learn it!</h1>
      <div className={style.about}>This is an app for learning and training English vocabulary. You can also use the app to add and edit new words.</div>
      <button className={style.button}>Start</button>
    </div>
  )
}
