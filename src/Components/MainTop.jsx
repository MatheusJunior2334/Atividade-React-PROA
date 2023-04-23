import styles from './MainTop.module.css';

function MainTop() {
    return (
        <section id={styles.section1}>
            <div id={styles.div1}>
                <h1>Óleos Essenciais</h1>
                <p>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, <br /> flores, galhos, troncos, raízes e cascas de frutos.</p>
            </div>
            <div id={styles.div2}>
                <div id={styles.div2_part1}>
                    <div id={styles.filtrar}>
                        <h2>FILTRAR</h2>
                        <div></div>
                    </div>
                    <div id={styles.ordenar}>
                        <h2>ORDENAR POR</h2>
                        <div></div>
                    </div>
                </div>
                <div id={styles.div2_part2}>
                    <p>56 Produtos</p>
                </div>
            </div>
        </section>
    )
}

export default MainTop