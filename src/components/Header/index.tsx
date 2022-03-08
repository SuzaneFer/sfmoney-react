import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logosu3.png'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

    return (
        <Container>
            <Content>
            <img src={logoImg} alt="sf money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}