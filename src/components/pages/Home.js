import img from '../../img/fotoPerfil2.jpg';
import img2 from '../../img/fotoPerfil768px.jpg';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <header className={styles.header}>
                <img className={styles.img} src={img} alt='Imagem de perfil' />
                <img className={styles.img2} src={img2} alt='Imagem de perfil' />
                <section className={styles.div_animation}>
                    <div className={styles.div_sobre}>
                        <h1>Desenvolvedora Front-end</h1>
                        <span>Apaixonada por códigos!</span>
                        {/* <li className={styles.button}>
                            <a href='/aboutme' className={styles.link_button}>VEJA SOBRE MIM</a>
                        </li> */}
                    </div>
                    <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className={styles.wave1} fill="#eeedea" fillOpacity="1" d="M0,96L16,85.3C32,75,64,53,96,74.7C128,96,160,160,192,181.3C224,203,256,181,288,170.7C320,160,352,160,384,160C416,160,448,160,480,160C512,160,544,160,576,149.3C608,139,640,117,672,112C704,107,736,117,768,133.3C800,149,832,171,864,160C896,149,928,107,960,106.7C992,107,1024,149,1056,186.7C1088,224,1120,256,1152,224C1184,192,1216,96,1248,69.3C1280,43,1312,85,1344,128C1376,171,1408,213,1424,234.7L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
                        <path className={styles.wave2} fill="#E6E2D7" fillOpacity="1" d="M0,64L26.7,96C53.3,128,107,192,160,229.3C213.3,267,267,277,320,234.7C373.3,192,427,96,480,53.3C533.3,11,587,21,640,42.7C693.3,64,747,96,800,106.7C853.3,117,907,107,960,112C1013.3,117,1067,139,1120,170.7C1173.3,203,1227,245,1280,224C1333.3,203,1387,117,1413,74.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    </svg>
                </section>
            </header>
        </>
    )
}

export default Home