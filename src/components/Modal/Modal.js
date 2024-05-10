import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackground, ModalImage, Image } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    // Подключение слушателя событий
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    // Удаление слушателя событий
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    // Функция закрытия модального окна по Esc
    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    // Функция закрытия модального окна по клику в бекдроп
    handleBackdropClick = event => { 
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        const { largeImage } = this.props;
        return createPortal(
            <ModalBackground onClick={this.handleBackdropClick}>
                <ModalImage>
                    <Image src={largeImage} alt="" />
                </ModalImage>
            </ModalBackground>,
            modalRoot,
        );
    } 
};

export default Modal;