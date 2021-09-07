import styles from "./index.module.css";

export const UserCard = ({ data }) => {
  return (
<>
{data !== undefined &&
        data?.map((data) => {
          return (
            <div className={styles.userBox} key={data?.key}>
              <h1><span className={styles.spanPink}>Nome</span> : {data?.nome}</h1>
              <h2><span className={styles.spanBlue}>Idade</span> : {data?.idade}</h2>
            </div>
          );
        })}
        
</>
  );
};
