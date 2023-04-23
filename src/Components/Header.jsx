import logo from '../Images/Logo_phytoterapica.png';
import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div id={styles.header1}>
                <div id={styles.header_part1}>
                    <img src={logo} alt="Logo Phytoterapica" />
                    </div>
                <div id={styles.header_part2}></div>
                <div id={styles.header_part3}>
                    <div id={styles.search}>
                        <div></div>
                        <input type="search" placeholder='O que você procura?' />
                    </div>
                    <div id={styles.compra}>
                        <button id={styles.compra1}><p>-5% NA PRIMEIRA COMPRA</p></button>
                        <button id={styles.compra2}><p>Clique para copiar: CUPOM5</p></button>
                        <div id={styles.porcentagem}></div>
                    </div>
                </div>
                <div id={styles.header_part4}>
                    <div id={styles.login}></div>
                    <div id={styles.carrinho}></div>
                </div>
            </div>

            <div id={styles.header2}>
                <p>ÓLEOS ESSENCIAIS</p>
                <p>ÓLEOS VEGETAIS</p>
                <p>SINERGIAS</p>
                <p>COSMÉTICOS NATURAIS</p>
                <p>HIGIENE PESSOAL</p>
                <p>AROMATIZADORES</p>
                <p>SUPLEMENTOS</p>
                <p>ACESSÓRIOS</p>
                <p>OFERTAS</p>
                <p>CONSULTOR(A)</p>
            </div> 
        </header>
    )
}

export default Header