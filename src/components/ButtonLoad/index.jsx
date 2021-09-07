import styles from "./index.module.css";
export const ButtonLoad = ({ functionOnClick }) => {
  const setCanRender = functionOnClick;
  return (
    <div className={styles.loadButton}>
      <button onClick={() => setCanRender(true)}>Load</button>
    </div>
  );
};
