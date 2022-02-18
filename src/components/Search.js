import Header from "./Header"
import styled from 'styled-components';

import { useState } from 'react';

function Search() {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyA-X5yCIhkEn70GfQhittAlUznwetUkIkc`)
            const data = await response.json()
            console.log(data.items)
        } catch (err) {
            return
        }
    }

    return (
        <>
            <Header />
            <StyledSearch>
                <Form onSubmit={handleSearch}>
                    <Input
                        type="text"
                        placeholder="Search book by title"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button>Search</Button>
                </Form>
            </StyledSearch>
        </>
    )
}

export default Search;

const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    background-color: rgb(238,238,238);
    display: flex;
    padding: 2em;
    gap: 1em;
    margin-top: 3em;
`;

const Input = styled.input`
    font-family: "Lato", sans-serif;
    width: 20em;
    padding: 0.5em;
    font-size: 16px;
    @media only screen and (max-width: 600px) {
        width: 15em;
        font-size: 10px;
    }
`;

const Button = styled.button`
    background-color: rgb(244,241,234);
    border: 1px solid #D6D0C4;  
    padding: 1em;
    font-size: 12px;
    border-radius: 3px;
    font-family: "Lato", sans-serif;
    align-self: center;
    &:hover {
        background-color: #EDE6D6;
        cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;