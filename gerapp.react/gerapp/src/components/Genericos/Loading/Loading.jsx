import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Carregando...</span>
            </Spinner>
        </div>
    )
}

export default Loading