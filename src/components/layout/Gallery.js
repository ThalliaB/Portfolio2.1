import React, { useState } from 'react'
import './Gallery.css'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

// imgs
import img1 from '../../img/foto2.1.jpg'
import img2 from '../../img/fotoPerfil2.jpg'
import img3 from '../../img/img1.jpg'
import img4 from '../../img/img2.jpg'
import img5 from '../../img/img3.jpg'
import img6 from '../../img/img6.jpg'

const Gallery = () => {

    let images = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
    ]

    const [slideNumber, setslideNumber] = useState(0);
    const [model, setModel] = useState(false);

    const openModal = (index) => {
        setslideNumber(index);
        setModel(true);
    }

    const prevImg = () => {
        slideNumber === 0 ? setslideNumber( images.length - 1 ) : setslideNumber(slideNumber - 1);
    }
    
    const nextImg = () => {
        slideNumber + 1 === images.length ? setslideNumber(0) : setslideNumber(slideNumber + 1)
    }

    return(
        <>
            <div className={model ? 'model open' : 'model'}>
                <AiOutlineLeft className='arrow arrowLeft' onClick={prevImg}/>
                <img src={images[slideNumber].imgSrc} alt='' />
                <AiOutlineRight className='arrow arrowRight' onClick={nextImg}/>
                <AiOutlineClose className='close' onClick={() => setModel(false)} />
            </div>

            <div className='gallery'>
                {images && images.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => openModal(index)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt='' />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery