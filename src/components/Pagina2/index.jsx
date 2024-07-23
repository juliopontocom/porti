import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const Pagina2 = () => {
  const [expandido, setExpandido] = useState(false);

  const toggleExpandido = () => {
    setExpandido(!expandido);
  };

  return (
    <div className={styles.Pagina2}>
      <div className={styles.corpo}>
        <div className={styles.corpoHabilidades}>
          <div className={styles.titulo}>Habilidades</div>
          <div className={styles.icones}>
            <FaHtml5 className={styles.icone} />
            <IoLogoCss3 className={styles.icone} />
            <FaReact className={styles.icone} />
            <BiLogoTypescript className={styles.icone} />
            <BiLogoJavascript className={styles.icone} />
            <FaPython className={styles.icone} />
            <FaGithub className={styles.icone} />
            <FaGitAlt className={styles.icone} /> 
            <FaJava className={styles.icone} />
            <IoLogoFigma className={styles.icone} />
          </div>
        </div>
        <div className={`${styles.corpoSobreMim} ${expandido ? styles.expandido : ''}`}>
          <div className={styles.titulo}>Sobre mim</div>
          <div className={styles.texto}>
            Tenho 19 anos e sou estudante de Engenharia de Software na PUCRS, atualmente no 4º semestre. Comecei aprendendo java na faculdade, e no 2º semestre me apaixonei pelo desenvolvimento web. Aprendi HTML, CSS e Javascript na Alura e criei minhas primeiras páginas. Logo, no 3º semestre, estava começando uma nova cadeira chamada AGES(Agência Experimental de Software), onde iríamos desenvolver um projeto completo durante o semestre utilizando o método SCRUM. Como nosso projeto iria usar React, uma tecnologia nova para mim, estudei na formação de React da RocketSeat, onde expandi muito meus conhecimentos sobre desenvolvimento web. Hoje, no 4º semestre, estou desenvolvendo meus projetos pessoais e estudando também sobre a área de UI Design, em um bootcamp chamado Memorisely.
          </div>
          <button className={styles.toggleButton} onClick={toggleExpandido}>
            {expandido ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina2;
