import React, { useRef, useState } from 'react';
import Pagina1 from '../Pagina1';
import Pagina2 from '../Pagina2';
import Pagina3 from '../Pagina3';
import Pagina4 from '../Pagina4';
import { BsArrowDownSquareFill } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";
import styles from './styles.module.css';

const PaginaTotal = () => {
  const pagina1Ref = useRef(null);
  const pagina2Ref = useRef(null);
  const pagina3Ref = useRef(null);
  const pagina4Ref = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pageRefs = [pagina1Ref, pagina2Ref, pagina3Ref, pagina4Ref];

  const scrollToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < pageRefs.length) {
      pageRefs[pageIndex].current.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage(pageIndex + 1);
    }
  };

  const handleScrollDown = () => {
    scrollToPage(currentPage);
  };

  const handleScrollUp = () => {
    scrollToPage(currentPage - 2);
  };

  const handlePageChange = (pageIndex) => {
    scrollToPage(pageIndex);
  };

  return (
    <div className={styles.PaginaTotal}>
      <div ref={pagina1Ref}>
        <Pagina1 
          nextPageRef={pagina2Ref} 
          habilidadesRef={pagina2Ref} 
          portifolioRef={pagina3Ref} 
          contatoRef={pagina4Ref}
          onPageChange={handlePageChange}
        />
      </div>
      <div ref={pagina2Ref}>
        <Pagina2 />
      </div>
      <div ref={pagina3Ref}>
        <Pagina3 />
      </div>
      <div ref={pagina4Ref}>
        <Pagina4 />
      </div>

      <div className={styles.setas}>
        <BsArrowUpSquareFill
          className={styles.seta} 
          onClick={handleScrollUp} 
        />
        <BsArrowDownSquareFill
          className={styles.seta} 
          onClick={handleScrollDown} 
        />
      </div>
    </div>
  );
};

export default PaginaTotal;
