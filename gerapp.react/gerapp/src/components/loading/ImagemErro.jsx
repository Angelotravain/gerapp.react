import React from 'react'
import Button from 'react-bootstrap/Button';
import Refresh from '../utils/Refresh';

const ImagemErro = () => {
    return (
        <div style={{ width: '100dvw', height: '90.5dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '5px', border: '1px solid #000' }}>
            <h2>Sua página não conseguiu ser carregada... 😞😞</h2>
            <img style={{ width: '400px', height: '400px' }} src='https://conceitos.com/wp-content/uploads/2015/06/Erro.jpg'></img>
            <Button variant="primary" onClick={Refresh}>Recarregar</Button>
        </div>
    )
}

export default ImagemErro