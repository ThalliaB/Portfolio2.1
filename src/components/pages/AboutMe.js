import img from '../../img/foto2.1.jpg'
import img2 from '../../img/foto3.1.jpg'
import img3 from '../../img/foto4.jpg'
import img4 from '../../img/fotoPerfil768px.jpg'
import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.div_sobre}>
                    <h1 className={styles.h1About}>Thallia Julliana Brum</h1>
                    <h4>Brasil</h4>
                    <h4>+55 (46) 9 9905-6002</h4>
                    <a href="mailto:thalliajb@gmail.com" rel='noreferrer' target='_blank'>thalliajb@gmail.com</a>
                    <hr className={styles.hr} />
                    <p>Olá, meu nome é Thallia, tenho 18 anos, moro no Paraná, Brasil.</p>
                    <p>Entrei no mundo a programação no ano de 2020, quando ganhei um curso do colégio que eu estudava. A princípio era só HTML, CSS e JavaScript, os quais eu me apaixonei desde a primeira linha de código que digitei, lembro muito bem que foi um <code>console.log("Hello Wold")</code> em uma página da internet. Foi um momento incrível em que eu pude ver que o que me aguardava era muito maior do que eu pensava no começo! </p>
                    <p>Assim, então eu percebi que eu queria fazer isso no meu futuro, e como já estava terminando o ensino médio, resolvi começar a fazer faculdade de Análise e Desenvolvimento de Sistemas. </p>
                    <p className="p">Então comecei a aprender outras linguagens de programação, como ReactJS, Java, Python que aprendi na faculdade e um pouco de SQL. </p>
                    <p>Para meu futuro, quero continuar na área de programação, conhecer lugares novos e nunca parar de aprender coisas novas.</p>
                    <div>
                        <img src={img3} alt='Imagem de perfil' className={styles.imgDiv} />
                        <img src={img2} alt='Imagem de perfil' className={styles.imgDiv} />
                    </div>
                </div>
                <div>
                    <img src={img} alt='Imagem de perfil' className={styles.img} />
                    <img src={img4} alt='Imagem de perfil' className={styles.img4} />
                </div>

            </header>
            {/* <div className={styles.div_button}>
                <li>
                    <a href='/experience' className={styles.link_button}>MEUS PROJETOS</a>
                </li>
            </div> */}
        </>
    )
}

export default AboutMe