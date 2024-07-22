import React, { useRef } from 'react';
import Pagina1 from '../Pagina1';
import Pagina2 from '../Pagina2';
import Pagina3 from '../Pagina3';
import Pagina4 from '../Pagina4';
import styles from './styles.module.css';

const PaginaTotal = () => {
  const pagina1Ref = useRef(null);
  const pagina2Ref = useRef(null);
  const pagina3Ref = useRef(null);
  const pagina4Ref = useRef(null);

  return (
    <div className={styles.PaginaTotal}>
      <div ref={pagina1Ref}>
        <Pagina1 nextPageRef={pagina2Ref} />
      </div>
      <div ref={pagina2Ref}>
        <Pagina2 prevPageRef={pagina1Ref} nextPageRef={pagina3Ref} />
      </div>
      <div ref={pagina3Ref}>
        <Pagina3 prevPageRef={pagina2Ref} nextPageRef={pagina4Ref} />
      </div>
      <div ref={pagina4Ref}>
        <Pagina4 prevPageRef={pagina3Ref} />
      </div>
    </div>
  );
};

export default PaginaTotal;
