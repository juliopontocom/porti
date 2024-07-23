import React from 'react';
import styles from './styles.module.css';
import avatar from '../../assets/ava.png';

const Pagina1 = ({ habilidadesRef, portifolioRef, contatoRef, nextPageRef, onPageChange }) => {
  const scrollToPage = (pageRef, pageIndex) => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
    onPageChange(pageIndex);
  };

  return (
    <div className={styles.Pagina1}>
      <div className={styles.header}> 
          <div className={styles.palavras}>
              <div 
                className={styles.palavra} 
                onClick={() => scrollToPage(habilidadesRef, 1)}
              >
                Habilidades
              </div>
              <div 
                className={styles.palavra} 
                onClick={() => scrollToPage(portifolioRef, 2)}
              >
                Portifólio
              </div>
              <div 
                className={styles.palavra} 
                onClick={() => scrollToPage(contatoRef, 3)}
              >
                Contato
              </div>
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
              <div 
                className={styles.botaoVerMais} 
                onClick={() => scrollToPage(nextPageRef, 1)}
              >
                Ver mais
              </div>
          </div>
          <div className={styles.corpoAvatar}>
              <img src={avatar} alt="" className={styles.avatar}/>
          </div>
      </div>
    </div>
  );
};

export default Pagina1;
