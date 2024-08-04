import React, { useState } from 'react'
import styled from 'styled-components';
import { IoMdLogIn } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import {
    Input,
    InputContainer,
    Label,
    ButtonInterForm
} from '../../components/Input/Input.module';
import { useForm, Controller } from "react-hook-form";
import { getItens } from '../../services/httpRequest';

const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginModal = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.primary};
`;

const ResetContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    height: 80px;
`;
const RecuperarSenhaInput = styled.a`
    border-bottom: ${props => props.theme.colors.border};
    margin: 2px;
    cursor: pointer;
`;

const LoginForm = ({ validateLogin, funcLog }) => {
    const [erroLogin, setErroLogin] = useState(false);
    const link = 'Usuario';

    const BuscarLogin = async () => {
        setErroLogin(false);
        try {
            const login = watch('login');
            const senha = watch('senha');

            const response = await getItens(`${link}/${login}/${senha}/LS1ZWTQ0MjkzWVktLQ==`);
            sessionStorage.setItem('isLogin', true);
            validateLogin(true);
            funcLog(response);
        } catch (error) {
            setErroLogin(true);
        }
    };

    const {
        register,
        control,
        watch,
        setValue,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    return (
        <LoginContainer>
            <LoginModal>
                <InputContainer tamanho='80%'>
                    <Label>Login</Label>
                    <Input
                        type="text" {...register('login')} />
                </InputContainer>
                <InputContainer tamanho='80%'>
                    <Label>Senha</Label>
                    <Input
                        type="password" {...register('senha')} />
                </InputContainer>
                <InputContainer tamanho='25%'>
                    <ButtonInterForm onClick={() => BuscarLogin()}>Login</ButtonInterForm>
                </InputContainer>
                <InputContainer tamanho='50%' visible={!erroLogin && 'none'}>
                    <Label>Essa conta é mesmo sua?</Label>
                    <img style={{ display: 'block' }} src="https://media.tenor.com/LWo7XVeDS7MAAAAM/gato-desconfiado.gif" alt="gato desconfiado" />
                </InputContainer>
            </LoginModal>
        </LoginContainer>
    )
}

export default LoginForm