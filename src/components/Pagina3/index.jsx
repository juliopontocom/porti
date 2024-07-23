import React, { useState } from 'react';
import styles from './styles.module.css';
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Fábrica de promoções",
    date: "28/07/2024",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam necessitatibus voluptatem praesentium quis, itaque adipisci corporis cum, alias, pariatur maxime sapiente ullam perspiciatis incidunt accusamus blanditiis quaerat. Dicta, ipsa facere.",
    imageUrl: "../../assets/card1.png", // URL de exemplo para a imagem do projeto
  },
  {
    title: "Projeto 2",
    date: "15/08/2024",
    description: "Descrição do Projeto 2. Nam necessitatibus voluptatem praesentium quis, itaque adipisci corporis cum, alias, pariatur maxime sapiente ullam perspiciatis incidunt accusamus blanditiis quaerat. Dicta, ipsa facere.",
    imageUrl: "https://via.placeholder.com/600x400", // URL de exemplo para a imagem do projeto
  },
  {
    title: "Projeto 3",
    date: "10/09/2024",
    description: "Descrição do Projeto 3. Nam necessitatibus voluptatem praesentium quis, itaque adipisci corporis cum, alias, pariatur maxime sapiente ullam perspiciatis incidunt accusamus blanditiis quaerat. Dicta, ipsa facere.",
    imageUrl: "https://via.placeholder.com/600x400", // URL de exemplo para a imagem do projeto
  },
];

const Pagina3 = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className={styles.Pagina3}>
      <div className={styles.corpoMaximo}>
        <div className={styles.titulo}>Portifólio</div>
        <div className={styles.fotoProjeto}>
          <img src={currentProject.imageUrl} alt="" className={styles.imagemProjeto} />
        </div>
        <div className={styles.descricaoProjeto}>
          <div className={styles.corpoCimaProjeto}>
            <div className={styles.tituloProjeto}>{currentProject.title}</div>
            <div className={styles.dataProjeto}>{currentProject.date}</div>
          </div>
          <div className={styles.textoProjeto}>
            {currentProject.description}
          </div>
        </div>
        <div className={styles.botoes}>
          <div className={styles.botoesEsquerda}>
            <div className={styles.botao}>
              Projeto
              <RxExternalLink className={styles.icone} />
            </div>
            <div className={styles.botao}>
              Repositório
              <FaGithub className={styles.icone} />
            </div>
          </div>
          <div className={styles.botoesDireita}>
            <div className={styles.botao} onClick={handlePrev}>
              <FaArrowLeft className={styles.icone}/>
              Anterior
            </div>
            <div className={styles.botao} onClick={handleNext}>
              Próximo
              <FaArrowRight className={styles.icone}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina3;
