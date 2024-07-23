import React, { useState, useEffect } from 'react';
import {
    Container,
    DivModal,
    DivButtons
} from './FormStyled.module';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { insertItem, updateItem } from '../data/cadastros/CrudGeneric'


export default function FormStyled({ children, linkReturn, nameLinkReturn, data, linkSaveOrEdit, model }) {

    const navigate = useNavigate();


    const returnClick = () => {
        navigate(linkReturn);
    };

    const itemSave = async () => {
        try {
            await insertItem({ link: linkSaveOrEdit, item: model });
            returnClick();
        } catch (error) {
            console.error(`Error insert ${model}:`, error);
        }
    };


    const itemEdit = async () => {
        await updateItem({ link: linkSaveOrEdit, id: model.id, item: model }).then((res) => {
            returnClick();

        }).catch((err) => {
            console.error(`Error insert ${model}:`, err);
        });
    };

    const saveOrEdit = () => {
        if (model.id === 0) {
            itemSave();
        }
        else {
            itemEdit();
        }
    }
    return (
        <Container>
            <DivModal>
                <DivButtons>
                    <button onClick={returnClick}>Cancelar</button>
                    <button onClick={saveOrEdit}>Enviar</button>
                </DivButtons>
                {children}
            </DivModal>
        </Container>
    );
}
