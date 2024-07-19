import React from 'react'
import { InputCheckboxStyled } from '../Rotas/Cadastros/Global/GridGeneric.module'
import {
    Input3Styled,
    LabelStyled,
    FormStyle
} from './FormBairrosFields.module'
import { ButtonStyled } from '../Genericos/Button.module';
import {
    IconSavedStyled
} from '../IconsStyled.module'

const FormBairroFields = ({ idEdit }) => {
    return (
        <>
            <FormStyle>
                <LabelStyled htmlFor="id">
                    Código <Input3Styled type="text" name="id" value={idEdit} tamanho={'10%'} />
                </LabelStyled>
                <label htmlFor="nome">
                    Nome <input type="text" name="nome" value='Nome' />
                </label>
                <label htmlFor="valorFrete">
                    Valor do frete
                    <input type="text" name="valorFrete" value='Valor do frete' />
                </label>
                <label htmlFor="isentaFrete">
                    Isenta frete? <InputCheckboxStyled type="checkbox" name="isentaFrete" value='Isenta frete?' />
                </label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <ButtonStyled><IconSavedStyled /></ButtonStyled>
                </div>
            </FormStyle>
        </>
    )
}

export default FormBairroFields