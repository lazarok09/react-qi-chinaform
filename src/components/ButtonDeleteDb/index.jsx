import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import swal from "@sweetalert/with-react";

import styles from "./index.module.css";
import { useHistory } from "react-router";

export const ButtonDeleteDb = () => {
  const database = firebase.firestore();
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  const deleteAllFromDB = () => {
    swal({
      title: "Apagar tudo?",
      text: "Têm certeza que você quer apagar todos os dados ?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        database
          .collection("usuarios")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              database
                .collection("usuarios")
                .doc(`${doc.id}`)
                .delete()
                .then()
                .catch((e) => {
                  console.log(e.message);
                });
            });
          })
          .then(() =>
            swal(
              "Deletado!",
              "Todos os usuários foram apagados!",
              "success"
            ).then(() => goToHome())
          );
      }
    });
    /*
          @ ENGLISH
         # The deleteAllFromDB function is responsible for:
         ## do a search of all IDs registered in the database users collection
         ## with the IDs of each user saved in reference, the function does the delete action for each id in the database
    
          @ PT-BR
         # A função deleteAllFromDB é responsável por:
         ## fazer uma busca de todos os IDs cadastrados na coleção usuarios do banco de dados
         ## com os IDs de cada usuario salvo em referencia, a função faz a ação de delet para cada id no banco de dados 
    
      */
  };

  return (
    <div className={styles.actionDelete}>
      <button onClick={deleteAllFromDB}>Apagar</button>
    </div>
  );
};
