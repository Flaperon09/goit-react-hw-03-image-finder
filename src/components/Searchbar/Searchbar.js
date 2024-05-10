import { Header, Form, Input, Button } from './Searchbar.styled';

export const Searchbar = ({ onSubmitForm }) => {
    return (
        <Header>
            <Form onSubmit={onSubmitForm}>
                <Button type="submit">
                    <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ios/50/search--v1.png"
                        alt="search--v1"
                    />
                </Button>

                <Input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Header >
    )
};