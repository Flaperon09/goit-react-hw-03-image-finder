import React, { Component } from 'react';
import { GalleryItem, GalleryPhoto } from "./ImageGalleryItem.styled";
import Modal from '../Modal';

class ImageGalleryItem extends Component { 
    state = {
        showModal: false, // Состояние модального окна (закрыто)
        idImageForModal: 0, // id фото, по которому кликнули
    }

    // Плавная прокрутка загружаемых изображений
    componentDidUpdate() {
        window.scrollBy({ top: 850, behavior: "smooth", });
    }

    // Изменение состояния модального окна (открыто/закрыто)
    toggleModal = (id) => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
            idImageForModal: id,
        }));
    }

    render() {
        const { id, webformatURL, largeImageURL } = this.props;
        const { showModal, idImageForModal } = this.state;

        return (
            <GalleryItem key={id}>
                <GalleryPhoto
                    src={webformatURL}
                    alt=""
                    onClick={() => this.toggleModal(id)}
                />

                {/* Открытие модального окна по условиям */}
                {showModal && idImageForModal === id &&
                    <Modal
                        largeImage={largeImageURL}
                        onClose={this.toggleModal}
                    />
                }
            </GalleryItem>
        )
    };
};

export default ImageGalleryItem;