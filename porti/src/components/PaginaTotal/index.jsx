import React from 'react';
import styles from './styles.module.css';

import Pagina1 from '../Pagina1'
import Pagina2 from '../Pagina2'
import Pagina3 from '../Pagina3'
import Pagina4 from '../Pagina4'

const PaginaTotal = () => {
    return (
      <div className={styles.PaginaTotal}>
        <Pagina1/>
        <Pagina2/>
        <Pagina3/>
        <Pagina4/>
      </div>
    );
  };
  
  export default PaginaTotal;