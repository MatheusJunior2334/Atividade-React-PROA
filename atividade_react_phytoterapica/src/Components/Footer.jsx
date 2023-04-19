import vegano from '../Images/vegano.svg';
import pet from '../Images/pet.svg';
import puro from '../Images/gota_puro.svg';
import vtex from '../Images/vtex.svg';

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <div id={styles.footer_part1}>
                <div className={styles.caracteristicas}>
                    <div className={styles.width}>
                        <img src={vegano} alt='vegano' />
                        <div>
                            <h3>Vegano</h3>
                            <p>sem componentes de origem animal</p>
                        </div>
                    </div>
                </div>
                <div className={styles.caracteristicas}>
                    <div className={styles.width} id={styles.cruelty}>
                        <img src={pet} alt='cruelty-free' />
                        <div>
                            <h3>Cruelty-Free</h3>
                            <p>não testado em animais</p>
                        </div>
                    </div>
                </div>
                <div className={styles.caracteristicas}>
                    <div className={styles.width}>
                        <img src={puro} alt='100% puro' />
                        <div>
                            <h3>100% Puro</h3>
                            <p>óleos puros e naturais</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.footer_part2}></div>
            <div id={styles.footer_part3}>
                <div id={styles.footer_part3_1}>
                    <div>
                        <p id={styles.traco}>POLÍTICA DE PRIVACIDADE</p>
                    </div>
                    <div>
                        <p>TERMOS E CONDIÇÕES</p>
                    </div>
                </div>
                <div id={styles.footer_part3_2}>
                    <h6>PHYTOTERAPICA© 2023 | AV NOVA CANTAREIRA, 2627 - SÃO PAULO/SP | CNPJ: 72.962.327/0001-55</h6>
                </div>
                <div id={styles.footer_part3_3}>
                    <h6>Powered by</h6>
                    <img src={vtex} alt='vtex' />
                </div>
            </div>
        </footer>
    )
}

export default Footer