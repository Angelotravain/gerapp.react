import React, { useState, useEffect } from 'react';
import {
    Container,
    DivModal,
    DivButtons,
    ButtonTable
} from './FormStyled.module';
import { MdCancelPresentation } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
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
            <div>
                <DivButtons>
                    <ButtonTable onClick={returnClick} color='#cc0000'><MdCancelPresentation style={{ width: '60%', height: '60%' }} /></ButtonTable>
                    <ButtonTable onClick={saveOrEdit} color='#0078d3'><AiOutlineSend style={{ width: '60%', height: '60%' }} /></ButtonTable>
                </DivButtons>
                <DivModal>
                    {children}
                </DivModal>
            </div>
        </Container>
    );
}
