import React from 'react';
import styles from './styles.module.css';
import Icones from '../Icones'

const Pagina2 = () => {
    return (
      <div className={styles.Pagina2}>
        <div className={styles.corpo}>
            <div className={styles.corpoHabilidades}>
              <div className={styles.titulo}>Habilidades</div>
              <Icones/>
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