import styled from 'styled-components';

// Стиль хедера
export const Header = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: center;
    width: 100%;
`;

// Стиль для формы запроса
export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: baseline;
    background-color: #5555f0;

    padding-left: 50%;
    padding-right: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
`;

// Стиль поля input
export const Input = styled.input`
    outline: none;
    width: 300px;
    height: 25px;
    
    padding: 2px 2px 5px 40px;
    font-size: 18px;
`;

// Стиль кнопки запроса
export const Button = styled.button`
    position: relative;
    left: 35px;

    width: 35px;
    height: 22px;
    padding: 2px;
    background-color: white;
    border: 0px;
    cursor: pointer;
`;