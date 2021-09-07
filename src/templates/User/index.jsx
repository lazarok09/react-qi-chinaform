// components and custom hook
import { useContext, useState } from "react";

import { UserContext } from "../../context/context";

import img from "../../img/institutoqichina.png";
import stylesHome from "../Home/index.module.css";
import styles from "./index.module.css";

import { UserCard } from "./../../components/UserCard/index";
import { ButtonDeleteDb } from "./../../components/ButtonDeleteDb/index";
import { NoData } from "./../../components/NoData/index";
import { ButtonLoad } from './../../components/ButtonLoad/index';

export const UserData = () => {
  const [canRender, setCanRender] = useState(false);
  const context = useContext(UserContext);
  const { dataContext } = context;
  return (
    <main className={stylesHome.twoGrids}>
      <section id="img">
        <img src={img} alt="logo da QI China" />
      </section>
      <section className={stylesHome.marginTop}>
        <div className={stylesHome.twoGrids}>
          {canRender && <UserCard data={dataContext} />}
        </div>
        <div style={{ padding: "2rem" }}>
          {canRender && !dataContext && <NoData />}
        </div>

        <div className={styles.twoGrids}>
          <ButtonDeleteDb />
          <ButtonLoad functionOnClick={setCanRender} />
        </div>
        
      </section>
    </main>
  );
};
