import styles from "./index.module.css";
import backToHome from '../../img/forward.svg'
export const NoData = () => {
  return (
    <p className={styles.description}>
        Volte pra Home por favor.. É a partir de lá que eu carrego os dados :)
        <a href="/">
        <img src={backToHome} alt="icone pra voltar pra home" />
        </a>
    </p>
  );
};
