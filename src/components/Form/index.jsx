import { useRef, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../firebaseConfig";
import swal from "@sweetalert/with-react";

import styles from "./index.module.css";
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.firestore();

export const Form = () => {
  const nomeRef = useRef();
  const idadeRef = useRef();
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();

  const showConfirmModal = () => {
    swal({
      title: "Cadastrar usuário ?",
      text: "",
      icon: "info",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Cadastrei!",
          text: "Agora você pode ir em usuários e ver os dados",
          icon: "success",
          dangerMode: false,
      }).then(() => window.location.reload())
        }})
  }
  
  const saveOnDatabase = (e) => {
    database
      .collection("usuarios")
      .add({
        idade: idade,
        nome: nome,
        key: Math.random() * 100,
      })
      .then(() => showConfirmModal())
      .catch((e) => {
        alert("deu erro na hora de cadastrar um usuário");
      });

    // prevent default
    e.preventDefault();
  };
  const handleChangeNome = () => {
    setNome(nomeRef.current.value);
  };
  const handleChangeIdade = () => {
    setIdade(idadeRef.current.value);
  };
  return (
    <section>
      <form onSubmit={saveOnDatabase}>
        <fieldset className={styles.flexColumn}>
          <legend className={styles.formTitle}>Formulário</legend>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>

            <input
              ref={nomeRef}
              onChange={() => handleChangeNome()}
              type="text"
              id="name"
              maxLength="15"
              required
              placeholder="Robb Stark"
            />

            <label htmlFor="age">Idade</label>

            <input
              ref={idadeRef}
              onChange={() => handleChangeIdade()}
              type="number"
              id="age"
              min="16"
              max="120"
              required
              placeholder="18"
            />
          </div>

          <input className={styles.newUserButton} type="submit" value="Cadastrar" />
        </fieldset>
      </form>
    </section>
  );
};
