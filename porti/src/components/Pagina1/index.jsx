import React from 'react';
import styles from './styles.module.css';
import avatar from '../../assets/ava.png';
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

const Pagina1 = ({ nextPageRef }) => {
  const scrollToPage = (pageRef) => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.Pagina1}>
      <div className={styles.header}> 
          <div className={styles.palavras}>
              <div className={styles.palavra}>Habilidades</div>
              <div className={styles.palavra}>Portifólio</div>
              <div className={styles.palavra}>Contato</div>
          </div>
      </div>

      <div className={styles.corpo}>
          <div className={styles.corpoTexto}>
              <div className={styles.titulo}>
                  <span>Olá, meu<br></br> nome é <strong className={styles.strong}>Julio</strong></span>
              </div>
              <div className={styles.subtitulo}>
                  sou desenvolvedor full-stack
              </div>
              <div className={styles.botaoVerMais}>
                  Ver mais
              </div>
          </div>
          <div className={styles.corpoAvatar}>
              <img src={avatar} alt="" className={styles.avatar}/>
              <div className={styles.setas}>
                  <BsArrowUpCircleFill 
                    className={styles.seta} 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  />
                  <BsArrowDownCircleFill 
                    className={styles.seta} 
                    onClick={() => scrollToPage(nextPageRef)} 
                  />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Pagina1;
