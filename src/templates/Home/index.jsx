// components and custom hook
import { useEffect, useContext } from "react";
import { useFetchData } from '../../hooks/useFetchData/index';
import { UserContext } from "../../context/context";

import img from "../../img/institutoqichina.png";
import styles from "./index.module.css";

import { Form } from "./../../components/Form/index";

export const Home = () => {
  const [doFetch] = useFetchData();

  const context = useContext(UserContext);
  const { setDataContext } = context;

  // component did mount
  useEffect(() => {
    const handleDoFetch = async () => {
      // return a array of objects and set it in data state.
      await doFetch().then(setDataContext);
    };
    handleDoFetch();
  }, []);

  return (
    <main className={styles.twoGrids}>
      <section className={styles.imgContainer}>
        <img src={img} alt="logo da QI China" />
      </section>
      <section className={styles.marginTop}>
        <Form />
      </section>
    </main>
  );
};
