import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const Aside = () => {

  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/userdata">Usuários</Link>
    </div>
  );
};
