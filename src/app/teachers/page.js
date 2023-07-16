import styles from "./styles.module.css";
function Teachers() {
  const arrayDeProfessores = [
    { nome: "Teacher", idade: 39, salario: "2300" },
    { nome: "Teacher", idade: 32, salario: "2600" },
    { nome: "Teacher", idade: 59, salario: "5000" },
    { nome: "Teacher", idade: 49, salario: "4500" },
  ];

  return (
    <div className={styles.containerProfessor}>
      {arrayDeProfessores.map((professor, index) => {
        return (
          <div className={styles.cardItemProfessor} key={index}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" className={styles.avatar} />
            <div>Nome: {professor.nome}</div>
            <div>Idade: {professor.idade}</div>
            <div>Salario: {professor.salario}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Teachers;
