import React from 'react';
import styles from './styles.module.css';

const Pagina3 = () => {
    return (
      <div className={styles.Pagina3}>
        <div className={styles.corpoMaximo}>
          <div className={styles.titulo}>Portifólio</div>
          <div className={styles.fotoProjeto}></div>
          <div className={styles.descricaoProjeto}>
            <div className={styles.corpoCimaProjeto}>
              <div className={styles.tituloProjeto}>Fábrica de promoções</div>
              <div className={styles.dataProjeto}>28/07/2024</div>
            </div>
            <div className={styles.textoProjeto}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam necessitatibus voluptatem praesentium quis, itaque adipisci corporis cum, alias, pariatur maxime sapiente ullam perspiciatis incidunt accusamus blanditiis quaerat. Dicta, ipsa facere.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, blanditiis odit nesciunt enim commodi, aperiam dicta reiciendis vitae temporibus voluptas facere, aliquid al
            </div>
          </div>
          <div className={styles.botoes}>
            <div className={styles.botoesEsquerda}>
              <div className={styles.botao}>
                Projeto
                <svg className={styles.icone1} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5001 1.25H2.6001C2.04005 1.25 1.75981 1.25 1.5459 1.35899C1.35774 1.45486 1.20486 1.60774 1.10899 1.7959C1 2.00981 1 2.29005 1 2.8501V6.6501C1 7.21015 1 7.49005 1.10899 7.70395C1.20486 7.8921 1.35774 8.04525 1.5459 8.1411C1.7596 8.25 2.03949 8.25 2.59845 8.25H6.40155C6.9605 8.25 7.24 8.25 7.4537 8.1411C7.64185 8.04525 7.79525 7.89195 7.8911 7.7038C8 7.4901 8 7.2105 8 6.65155V5.75M8.5 3.25V0.75M8.5 0.75H6M8.5 0.75L5 4.25" stroke="#E6DED8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className={styles.botao}>
                Repositório
                <svg className={styles.icone2} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.49531 0.894043C3.59727 0.892872 1.25 3.23897 1.25 6.13467C1.25 8.42451 2.71836 10.371 4.76328 11.0858C5.03867 11.155 4.99648 10.9593 4.99648 10.8257V9.91748C3.40625 10.1038 3.3418 9.05147 3.23516 8.87568C3.01953 8.50772 2.50977 8.41397 2.66211 8.23818C3.02422 8.05186 3.39336 8.28506 3.82109 8.9167C4.13047 9.3749 4.73398 9.29756 5.03984 9.22139C5.10664 8.946 5.24961 8.6999 5.44648 8.50889C3.79883 8.21357 3.11211 7.20811 3.11211 6.01279C3.11211 5.43272 3.30312 4.89951 3.67812 4.46943C3.43906 3.76045 3.70039 3.15342 3.73555 3.06318C4.41641 3.00225 5.12422 3.55068 5.1793 3.59404C5.56602 3.48975 6.00781 3.43467 6.50234 3.43467C6.99922 3.43467 7.44219 3.49209 7.83242 3.59756C7.96484 3.49678 8.62109 3.02568 9.25391 3.08311C9.28789 3.17334 9.54336 3.76631 9.31836 4.46592C9.69805 4.89717 9.89141 5.43506 9.89141 6.01631C9.89141 7.21397 9.2 8.22061 7.54766 8.51123C7.68918 8.65041 7.80156 8.8164 7.87822 8.9995C7.95488 9.1826 7.99429 9.37914 7.99414 9.57764V10.896C8.00352 11.0015 7.99414 11.1058 8.16992 11.1058C10.2453 10.4062 11.7395 8.44561 11.7395 6.13584C11.7395 3.23897 9.39102 0.894043 6.49531 0.894043Z" fill="#E6DED8"/>
                </svg>
              </div>
            </div>
            <div className={styles.botoesDireita}>
              <div className={styles.botao}>
                <svg className={styles.icone3} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.83337 4L1.33337 4M1.33337 4L4.45837 7.125M1.33337 4L4.45837 0.875" stroke="#E6DED8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Anterior
                </div>
              <div className={styles.botao}>
                Próximo
                <svg className={styles.icone4} width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.833374 4H8.33337M8.33337 4L5.20837 0.875M8.33337 4L5.20837 7.125" stroke="#E6DED8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pagina3;