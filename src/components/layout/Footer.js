import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.h2}>Thallia Julliana Brum</h2>
            <div className={styles.info}>
                <div>
                    <p>+55 (46) 9 99056002</p>
                    <p>thalliajb@gmail.com</p>
                </div>
                <div>
                    <p>Pérola D'Oeste</p>
                    <p>Paraná, Brasil</p>
                </div>
            </div>
            <ul className={styles.social_list}>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://facebook.com/Thallia.brum"><FaFacebook /></a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/thalliajulliana/"><FaInstagram /></a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://linkedin.com/in/thallia-brum"><FaLinkedin /></a>
                </li>
            </ul>
            <p className={styles.copyright}>Copyright © 2023 <span>Thallia Julliana Brum, BR</span></p>
        </footer>
    )
}

export default Footer