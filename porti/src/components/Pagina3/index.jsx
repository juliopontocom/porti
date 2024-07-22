import React from 'react';
import styles from './styles.module.css';
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Pagina3 = () => {
  return (
    <div className={styles.Pagina3}>
      <div className={styles.corpoMaximo}>
        <div className={styles.titulo}>Portifólio</div>
        <div className={styles.fotoProjeto}></div>
        <div className={styles.descricaoProjeto}>
          <div className={styles.corpoCimaProjeto}>
            <div className={styles.tituloProjeto}>Fábrica de promoções</div>
            <div className={styles.dataProjeto}>28/07/2024</div>
          </div>
          <div className={styles.textoProjeto}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam necessitatibus voluptatem praesentium quis, itaque adipisci corporis cum, alias, pariatur maxime sapiente ullam perspiciatis incidunt accusamus blanditiis quaerat. Dicta, ipsa facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, blanditiis odit nesciunt enim commodi, aperiam dicta reiciendis vitae temporibus voluptas facere, aliquid al
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
            <div className={styles.botao}>
            <FaArrowLeft className={styles.icone}/>
              Anterior
              </div>
            <div className={styles.botao}>
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
