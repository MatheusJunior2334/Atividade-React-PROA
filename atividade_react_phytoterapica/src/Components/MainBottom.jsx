import styles from './MainBottom.module.css'

function MainBottom() {
    return (
        <section id={styles.newsletter}>
            <div id={styles.newsletterdiv}>
                <div id={styles.part1}>
                    <h3>INSCREVA-SE</h3>
                    <p>E RECEBA NOVIDADES E <br /> PROMOÇÕES</p>
                </div>
                <div id={styles.part2}>
                    <input type="email" placeholder='Seu e-mail' />
                </div>
                <div id={styles.part3}>
                    <button>
                        ASSINAR NEWSLETTER
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MainBottom