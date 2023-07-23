"use client";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css";

function Teachers() {
  const [professores, setProfessores] = useState([
    { nome: "Teacher", idade: 39, salario: "2300" },
    { nome: "Teacher", idade: 32, salario: "2600" },
    { nome: "Teacher", idade: 59, salario: "5000" },
    { nome: "Teacher", idade: 49, salario: "4500" },
  ]);

  /*   let professores = [
    { nome: "Teacher", idade: 39, salario: "5300" },
    { nome: "Teacher", idade: 32, salario: "4600" },
    { nome: "Teacher", idade: 59, salario: "2000" },
    { nome: "Teacher", idade: 49, salario: "1500" },
  ]; */

  /*  const adicionarProfessor = () => {
    setProfessores(prevState => [...prevState, { nome: "Novo Professor", idade: 20, salario: "30000"}])
  } */

  function adicionarProfessor(novoProfessor) {
    const novoProfessorJaExiste = professores.filter(
      (p) => p.nome == novoProfessor.nome
    );

    if (novoProfessorJaExiste.length == 0) {
      setProfessores((prevState) => [...prevState, novoProfessor]);
      toast.success("Professor adicionado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("O professor já existe!!!", { position: "top-right" });
    }
  }

  function excluirProfessor(index) {
    const result = professores.filter((p, i) => i != index)
    setProfessores(() => result)
    toast.success("Professor removido com sucesso", {position: "top-right", autoClose: 5000})
  }

  /*  function adicionarProfessor() {
    professores = [
      ...professores,
      { nome: "Novo Professor", idade: 10, salario: "30000" },
    ];
  } */

  return (
    <>
      <div className={styles.containerProfessor}>
        <ToastContainer />
        {professores.map((professor, index) => {
          return (
            <div className={styles.cardItemProfessor} key={index}>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className={styles.avatar}
              />
              <div>Nome: {professor.nome}</div>
              <div>Idade: {professor.idade}</div>
              <div>Salario: {professor.salario}</div>
              <button className={styles.buttonExcluirProfessor} onClick={() => excluirProfessor(index)}><DeleteForeverIcon /></button>
            </div>
          );
        })}
      </div>
      <button onClick={() => adicionarProfessor({ nome: "teste", idade: 20 })}>
        Adicionar Professor
      </button>
    </>
  );
}

export default Teachers;
