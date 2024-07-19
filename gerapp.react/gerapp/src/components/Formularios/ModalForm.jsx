import {
    DivWrapper,
    DivModal,
    IconCloseButtonStyled,
    DivHeadModalStyled,
    DivContentStyled
} from './Bairroform.module';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ModalForm = ({ isOpen, setOpenModal, children }) => {

    const location = useLocation();

    {
        if (isOpen) {
            return <DivWrapper onClick={() => setOpenModal(!isOpen)}>
                <DivModal>
                    <DivHeadModalStyled>
                        <div>

                        </div>
                        <IconCloseButtonStyled onClick={() => setOpenModal(!isOpen)} />
                    </DivHeadModalStyled>
                    <DivContentStyled>
                        {children}
                    </DivContentStyled>
                </DivModal>
            </DivWrapper>
        }
    }

    return null
}

export default ModalForm