import img0 from '../../img/imgProject/MyLibrary.png'
import img1 from '../../img/imgProject/LetYourComment.jpg'
import img2 from '../../img/imgProject/wildbest.jpg'
import img3 from '../../img/imgProject/AluraFlix.jpg'
import img4 from '../../img/imgProject/frutaEFruto.jpg'
import img5 from '../../img/imgProject/CasaFinaArquitetura.jpg'
import img6 from '../../img/imgProject/barbeariaAlura.jpg'

import styles from './Experience.module.css'
import Card from '../layout/Card'
function Experience() {
    return (
        <section className={styles.experience}>

            <h1 className={styles.h1Experience}>Meus projetos</h1>
            <p style={{ textAlign: 'justify', textIndent: '1em' }}>Sempre gostei muito de utilizar HTML e CSS então uma parte dos meus projetos é baseado nisso, mas com o passar dos meses, me surgiu o desejo de fazer coisas mais elaboradas e bonitas.</p>
            <p style={{ textAlign: 'justify', textIndent: '1em' }}>Foi difícil até que consegui fazer algumas das coisas que queria, pois não tinha tanta prática e não entendia bem como funcionavam, mas com muita persistência, de pouco em pouco fui construindo o que tenho hoje. Muitas dessas aplicações no começo eram coisas tão simples que se for olhar eram tão feias comparadas com as de hoje. Mas felizmente eu nunca desisti de tentar.</p>
            <p style={{ textAlign: 'justify', textIndent: '1em' }}>Tudo o que eu sei hoje, eu aprendi sozinha, então tenho muito orgulho das coisas que fiz e das barreiras que atravessei, pois eu sei o quanto foi difícil, antes que tudo se tornasse claro para mim. HTML, CSS e JavaScript foi um "divisor de águas" para mim. Já ReactJS foi algo que me permitiu colocar em prática o que eu já sabia e um pouco mais. Java, Python e MySQL me fizeram ver o que eu ainda tenho a frente para aprender, e é isso que me dá forças todos os dias para seguir firme apesar dos erros que acontecem.</p>
            <p style={{ paddingBottom: '1em', textAlign: 'justify', textIndent: '1em' }}>Então aqui estão alguns de meus projetos:</p>

            <section className={styles.cards}>
                <Card
                    img={img0} alt=''
                    title='My Library'
                    p='Programa que lista os livros que tenho na estante'
                    tag='#Csharp #C# #CSS #JS'
                    link={`https://github.com/ThalliaB/MyLibrary`}
                    link2={`https://github.com/ThalliaB/MyLibrary`}
                />

                <Card
                    img={img1} alt=''
                    title='LetYourComment'
                    p='Página para escrever seu comentário'
                    tag='#React #CSS #Database'
                    link={`https://github.com/ThalliaB/LetYourComment1.0`}
                    link2={`https://let-your-comment1-0.vercel.app/`}
                />

                <Card
                    img={img2} alt=''
                    title='Wildbeast'
                    p='Página com css grid'
                    tag='#CSS #Grid #HTML'
                    link={`https://github.com/ThalliaB/Wildbeast`}
                    link2={`https://thalliab.github.io/Wildbeast/`}
                />

                <Card
                    img={img3} alt=''
                    title='AluraFlix'
                    p='Página com filmes desenvolvido na Imersão dev da Alura'
                    tag=' #HTML #CSS #JavaScript'
                    link={`https://github.com/ThalliaB/AluraFlix`}
                    link2={`https://thalliab.github.io/AluraFlix/`}
                />

                <Card
                    img={img4} alt=''
                    title='Fruta e Fruto'
                    p='Página de um restaurante'
                    tag='#HTML #CSS #Bootstrap'
                    link={`https://github.com/ThalliaB/projet-Fruta-Fruto`}
                    link2={`https://projeto-fruta-fruto.vercel.app/`}
                />

                <Card
                    img={img5} alt=''
                    title='Top Casa Fina Arquitetura'
                    p='Página sobre arquitetura'
                    tag='#HTML #CSS #Bootstrap'
                    link={`https://github.com/ThalliaB/CasaFina-Arquitetura-css`}
                    link2={`https://casa-fina-arquitetura-css.vercel.app/`}
                />

                <Card
                    img={img6} alt=''
                    title='Barbearia Alura'
                    p='Página desenvolvida em um curso da Alura'
                    tag='#HTML #CSS'
                    link={`https://github.com/ThalliaB/BarbeariaAlura`}
                    link2={`https://barbearia-alura-ten.vercel.app/`}
                />
            </section>
        </section>
    )
}

export default Experience