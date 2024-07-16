import React from 'react';
import styles from './styles.module.css';
import avatar from '../../assets/ava.png'
import arrowBottom from '../../assets/arrow-bottom.svg'
import arrowTop from '../../assets/arrow-top.svg'

const Pagina1 = () => {
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
                    <img className={styles.seta} src={arrowTop} alt="" />
                    <img className={styles.seta} src={arrowBottom} alt="" />
                </div>
            </div>
        </div>

      </div>
    );
  };
  
  export default Pagina1;