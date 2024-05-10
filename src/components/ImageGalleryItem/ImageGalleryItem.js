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
        const { arrPhotos } = this.props;
        const { showModal, idImageForModal } = this.state;
        
        // Устранение ошибки при начальном отсутствии массива картинок
        if (!arrPhotos.length) {
            return
        } else {
            return (
                arrPhotos.map(({ id, webformatURL, largeImageURL }) => {
                    return (
                        <GalleryItem key={id}>
                            <GalleryPhoto
                                src={webformatURL}
                                alt=""
                                onClick={() => this.toggleModal(id)}
                            />

                            {showModal && idImageForModal === id &&
                                <Modal
                                    largeImage={largeImageURL}
                                    onClose={this.toggleModal}
                                />
                            }
                        </GalleryItem>
                    )
                })           
            )
        }
    };
};

export default ImageGalleryItem;