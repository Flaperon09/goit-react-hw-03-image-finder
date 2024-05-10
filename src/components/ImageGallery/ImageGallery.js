import ImageGalleryItem from "components/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({arrImages}) => {
    return (
        <Gallery>

            <ImageGalleryItem
                arrPhotos={arrImages}
            />

        </Gallery>
    )
};