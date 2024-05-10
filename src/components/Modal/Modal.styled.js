import styled from 'styled-components';

export const ModalBackground = styled.div`  
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
    padding: 5px;
    background-color: white;
    border-radius: 5px;
`;

export const Image = styled.img`
    max-height: calc(100vh - 34px);
`;