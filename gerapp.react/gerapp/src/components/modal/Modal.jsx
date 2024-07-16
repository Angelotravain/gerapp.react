import React from 'react'
import { IoMdClose } from "react-icons/io";

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'

};

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    padding: '60px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: '#000',
    overflowX: 'auto'
};

const CLOSE_STYLE = {
    cursor: 'pointer',
    right: '0',
    position: 'absolute',
    top: '10',
    right: '10',
    fontWeight: 'bold',
    fontSize: '30px'
}

export default function Modal({ isOpen, setModalOpen, children }) {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <IoMdClose onClick={setModalOpen} style={CLOSE_STYLE} />
                    <div>{children}</div>
                </div>
            </div>
        )
    }

    return null
}
