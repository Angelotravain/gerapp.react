import React from 'react'
import { ImgAvatar } from '../../views/formularios/FormStyled.module'

const Image = ({ imageSrc, alt, onClick }) => {
    return (
        <ImgAvatar>
            <img src={imageSrc} alt={alt} onClick={onClick} />
        </ImgAvatar>
    )
}

export default Image