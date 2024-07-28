import React, { useState } from 'react'
import {
    DeleteContainer,
    TitleContainer,
    ButtonContainer,
    ButtonDelete,
    ButtonCancel,
    SpanReturn,
    CheckSuccess
} from './Delete.module'
import {
    deleteItem
} from '../../services/httpRequest';

const DeleteItens = ({ link, id, setShowDelete }) => {
    const [isDelete, setDelete] = useState(false);

    const itemDelete = async () => {
        try {
            let response = await deleteItem({ link, id });
            console.log(response);
            setDelete(!isDelete);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error(`Error deleting item with id ${id}:`, error);
        }
    };

    return (
        <DeleteContainer>
            <TitleContainer isDelete={isDelete}>
                <h3>Deseja realmente excluir os itens?</h3>
            </TitleContainer>
            <ButtonContainer isDelete={isDelete}>
                <ButtonDelete onClick={() => { itemDelete(); }}>Excluir</ButtonDelete>
                <ButtonCancel onClick={() => setShowDelete(false)}>Cancelar</ButtonCancel>
            </ButtonContainer>
            <SpanReturn isDelete={isDelete}><CheckSuccess /> Excluido com sucesso</SpanReturn>
        </DeleteContainer>
    )
}

export default DeleteItens