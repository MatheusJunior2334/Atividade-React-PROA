import styles from './MainMiddle.module.css';

function MainMiddle(props) {
    return (
        <section id={styles.section2}>
            <div id={styles.row}>
                <div>
                    <img src={props.imagem} alt={props.alt} />
                    <h4>Óleo Essencial de {props.tipo} - {props.quantidade}</h4>
                    <p>{props.preco1}</p>
                    <h6>(ou em até 3x de {props.preco2} sem juros)</h6>
                </div>
            </div>
        </section>
    )
}

export default MainMiddle