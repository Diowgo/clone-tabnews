import Mensagem from "../components/component";
import styles from "../styles.module.css";

function Home() {
  return <div className={styles.wide}>
    <div className={styles.text}>
      <Mensagem/>
    </div>
  </div>
}  

export default Home;