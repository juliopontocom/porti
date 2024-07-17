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
              <div className={styles.botao}>Projeto
                <svg className={styles.icone1} id="link-externo" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Interface / External_Link">
                  <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </div>
              <div className={styles.botao}>Repositório
                <svg className={styles.icone2} id="github" width="16" height="16" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0001 1.75439C10.537 1.75439 1.2417 11.0477 1.2417 22.5128C1.2417 31.6847 7.18961 39.4655 15.4375 42.2107C16.4746 42.4032 16.8555 41.7604 16.8555 41.2121C16.8555 40.7171 16.8363 39.0819 16.8273 37.3473C11.0523 38.603 9.83373 34.8981 9.83373 34.8981C8.88945 32.4987 7.52889 31.8607 7.52889 31.8607C5.64514 30.5723 7.67086 30.5991 7.67086 30.5991C9.75501 30.7452 10.853 32.7383 10.853 32.7383C12.7044 35.9111 15.7091 34.994 16.8937 34.4639C17.08 33.1223 17.618 32.2062 18.2116 31.6878C13.6009 31.1636 8.75367 29.3833 8.75367 21.4293C8.75367 19.1629 9.56492 17.3111 10.8928 15.8571C10.677 15.3346 9.96642 13.2233 11.0936 10.364C11.0936 10.364 12.8364 9.80605 16.8033 12.4918C18.4595 12.0315 20.2356 11.8001 22.0001 11.7922C23.7635 11.8001 25.5407 12.0308 27.2 12.4911C31.162 9.80536 32.9028 10.3633 32.9028 10.3633C34.0327 13.2222 33.3222 15.3339 33.1066 15.8564C34.4376 17.3105 35.243 19.1622 35.243 21.4286C35.243 29.4015 30.3869 31.1567 25.7645 31.671C26.5094 32.3151 27.1728 33.5788 27.1728 35.5151C27.1728 38.2926 27.1488 40.528 27.1488 41.2117C27.1488 41.7641 27.5228 42.4114 28.5746 42.2076C36.8178 39.4596 42.7588 31.6813 42.7588 22.5128C42.7585 11.0484 33.4641 1.75439 22.0001 1.75439Z" fill="#8A6442"/>
                  <path d="M9.10392 31.5584C9.0582 31.6616 8.89595 31.6925 8.74813 31.622C8.59688 31.5546 8.51267 31.4141 8.56148 31.3106C8.60617 31.204 8.76876 31.1748 8.91898 31.246C9.07023 31.3137 9.15617 31.4556 9.10357 31.5588L9.10392 31.5584ZM9.94473 32.4965C9.84607 32.5883 9.65254 32.5457 9.52123 32.4003C9.3851 32.2559 9.35967 32.0624 9.46038 31.9692C9.56282 31.8778 9.75051 31.9211 9.88663 32.0655C10.0221 32.2119 10.0489 32.4037 9.94507 32.4969L9.94473 32.4965ZM10.7635 33.6917C10.6364 33.7804 10.428 33.6976 10.2995 33.513C10.1723 33.328 10.1723 33.1063 10.3029 33.018C10.4311 32.9293 10.6364 33.0094 10.767 33.1923C10.8935 33.3796 10.8935 33.6017 10.7635 33.6917ZM11.8845 34.8471C11.7711 34.9726 11.5284 34.9389 11.351 34.768C11.1699 34.6006 11.1193 34.3624 11.2331 34.2373C11.3486 34.1115 11.5923 34.1465 11.7707 34.3163C11.9519 34.4834 12.0065 34.722 11.8852 34.8467L11.8845 34.8471ZM13.4314 35.5177C13.3809 35.6803 13.1478 35.7542 12.9123 35.6848C12.6775 35.6136 12.5239 35.4235 12.572 35.2592C12.6201 35.0953 12.8549 35.0186 13.0918 35.0925C13.3265 35.1633 13.4802 35.3524 13.4314 35.5177ZM15.1305 35.6418C15.1364 35.813 14.937 35.9546 14.6905 35.9581C14.442 35.9639 14.2409 35.825 14.2385 35.6566C14.2385 35.4837 14.4338 35.3438 14.6819 35.339C14.9284 35.3345 15.1309 35.472 15.1309 35.6415L15.1305 35.6418ZM16.7111 35.373C16.7407 35.5397 16.5691 35.7113 16.324 35.757C16.0834 35.8017 15.86 35.6979 15.829 35.5325C15.7995 35.3613 15.9741 35.1898 16.2147 35.1455C16.4602 35.1032 16.6802 35.2036 16.7111 35.373Z" fill="#8A6442"/>
                </svg>
              </div>
            </div>
            <div className={styles.botoesDireita}>
              <div className={styles.botao}>
                <svg className={styles.icone3} id="seta-esquerda" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Anterior</div>
              <div className={styles.botao}>Próximo
                <svg className={styles.icone4} id="seta-esquerda" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pagina3;