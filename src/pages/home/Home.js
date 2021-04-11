import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="container-header-home">
        <h1>Verzel</h1>
        <div className="container-header-user">
          <h2>Usuário</h2>
          <button type="submit">Adicionar tarefa</button>
        </div>
      </div>

      <div className="container-home-task">
        <h1>Tarefas</h1>
        <div></div>
      </div>
    </>
  );
};

export default Home;
