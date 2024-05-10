import styled from 'styled-components';

export const GalleryItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% - 30px) / 4);
    padding: 5px;
`;

export const GalleryPhoto = styled.img`
    width: 100%;
    height: 260px;
    flex-grow: 1;
`;