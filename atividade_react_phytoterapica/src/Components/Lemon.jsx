import styles from './Lemon.module.css';

function Lemon(props) {
    return (
        <div id={styles.row}>
            <div>
                <img src={props.imagem} alt={props.alt} />
                <h4>Óleo Essencial de {props.tipo} - {props.quantidade}</h4>
                <p id={styles.precoriscado}>R$38,00</p>
                <label id={styles.preconormal}>{props.preco1}</label>
                <label id={styles.desconto}> -10%</label>
                <h6>(ou em até 3x de {props.preco2} sem juros)</h6>
            </div>
        </div>
    )
}

export default Lemon