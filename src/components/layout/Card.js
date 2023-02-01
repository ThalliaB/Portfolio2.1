import * as React from 'react'
import styles from './Card.module.css'

import { AiFillGithub } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'

function Card({ img, alt, title, p, tag, link, link2}){
    return (
        <div className={styles.card}>
            <img className={styles.imgCard} src={img} alt={alt} />
            <h2 className={styles.h2Card}>{title}</h2>
            <p className={styles.pCard}>{p}</p>
            <h6 className={styles.h6Card}>{tag}</h6>
            <p className={styles.pCard}>Veja o código em:</p>
            <a className={styles.linkCard} href={link} target='_blank' rel="noreferrer"><abbr title='Github'><AiFillGithub /></abbr></a>
            <a className={styles.linkCard} href={link2} target='_blank' rel="noreferrer"><abbr title='Página Web'><TbWorld /></abbr></a>
        </div>
    )
}

export default Card