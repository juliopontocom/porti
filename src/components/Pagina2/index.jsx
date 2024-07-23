import React from 'react';
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
        <div className={styles.corpoSobreMim}>
          <div className={styles.titulo}>Sobre mim</div>
          <div className={styles.texto}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ea voluptas a fugit facilis pariatur, optio blanditiis vitae, id molestiae ipsam tenetur delectus maxime voluptatum! Magni error earum ut minus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina2;
