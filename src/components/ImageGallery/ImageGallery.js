import ImageGalleryItem from "components/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({arrImages}) => {
    return (
        <Gallery >
            {arrImages.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        id={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                    />
                )
            })}
        </Gallery>
    )
};