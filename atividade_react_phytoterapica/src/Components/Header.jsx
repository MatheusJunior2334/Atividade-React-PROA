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
                    <input type="search" placeholder='O que você procura?' />
                    <input type="text" placeholder='O que você procura?' />
                </div>
                <div id={styles.header_part4}>
                    <img src='https://via.placeholder.com/75' alt='login' />
                    <img src='https://via.placeholder.com/75' alt='login' />
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