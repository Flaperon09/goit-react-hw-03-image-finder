import { ButtonContainer, ButtonLoadMore } from "./Button.styled";

export const Button = ({onClickLoadMore}) => {
    return (
        <ButtonContainer>
            <ButtonLoadMore type="button" onClick={onClickLoadMore}>
                    <span>Load more</span>
            </ButtonLoadMore>
        </ButtonContainer>
    )
};