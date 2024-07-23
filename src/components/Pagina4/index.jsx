import React from 'react';
import styles from './styles.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Pagina4 = () => {
  return (
    <div className={styles.Pagina4}>
      <div className={styles.corpoMaximo}>
        <div className={styles.titulo}>Contato</div>
        <div className={styles.corpo}>
          <div className={styles.inputs}>
            <input className={styles.nome} type="text" placeholder='nome'/>
            <input className={styles.email} type="email" placeholder='email' name="" id="" />
            <textarea className={styles.mensagem} name="" placeholder='mensagem' id=""></textarea>
          </div>
          <div className={styles.botoes}>
            <div className={styles.icones}>
              <FaLinkedin className={styles.icone}/>
              <FaGithub className={styles.icone} />

            </div>
            <div className={styles.enviar}>Enviar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4;
