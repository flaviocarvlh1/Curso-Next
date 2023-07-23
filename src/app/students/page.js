"use client";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css";

function Students() {
  const [estudantes, setEstudantes] = useState([
    { nome: "Student 1", idade: 20 },
    { nome: "Student 2", idade: "30" },
  ]);


  const addStudent = (student) => {
    if(!student)
      toast.error("Dados inválidos!!", { position: "top-right" });
    else {
      setEstudantes((prevState) => [...prevState, student])
      toast.success("Student addeded succefully", { position: "top-right" });
    }



  }

  const excluirEstudante = (index) => {
    const result = estudantes.filter((e, i) => i != index)
    setEstudantes(() => result)
    toast.success("Student removed succefully", { position: "top-right" });
  }

  return (
    <div className={styles.container}>
       <ToastContainer />
      <div className={styles.cardStudents}>
      {estudantes?.map((student, index) => (
        <div className={styles.studentItem}>
          <p>Nome: {student?.nome}</p>
          <p>Idade: {student?.idade}</p>
          <button className={styles.buttonExcluirProfessor} onClick={() => excluirEstudante(index)}><DeleteForeverIcon /></button>
        </div>
      ))}
        </div>


      <button className={styles.buttonAdicionar} onClick={() => addStudent({nome: "Novo estudante", idade: 20})}>Adicionar Estudante</button>
    </div>
  );
}

export default Students;
