import Header from "./Header"
import styled from 'styled-components';
import BookCard from './BookCard';
import { useState } from 'react';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyA-X5yCIhkEn70GfQhittAlUznwetUkIkc`)
            const data = await response.json()
            setCards(data.items)
            setLoading(false)
        } catch (err) {
            setLoading(true)
            console.log(err.response)
        }
    }

    const handleCards = () => {
        if (loading) {
            return;
        } else {
            const items = cards.map((item, i) => {
                return (
                    <div key={item.id}>
                        <BookCard
                            id={item.id}
                            thumbnail={item.volumeInfo.imageLinks.thumbnail}
                            title={item.volumeInfo.title}
                            categories={item.volumeInfo.categories}
                            pageCount={item.volumeInfo.pageCount}
                            authors={item.volumeInfo.authors}
                            publisher={item.volumeInfo.publisher}
                            description={item.volumeInfo.description}
                            infoLink={item.volumeInfo.infoLink}
                        />
                    </div>
                );
            });
            return (
                <BookContainer>{items}</BookContainer>
            );
        }
    }

    return (
        <>
            <Header />
            <StyledSearch>
                <Title>Search</Title>
                <Form onSubmit={handleSearch}>
                    <Input
                        type="text"
                        placeholder="Search book by title"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button>Search</Button>
                </Form>
                {handleCards()}
            </StyledSearch>
        </>
    )
}

export default Search;

const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 600px) {
        padding: 1em;
    }
`;

const Title = styled.div`
    font-family: 'Merriweather';
    font-weight: bold;
    color: rgb(55,34,19);
    padding: 1em 0em;
    font-size: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const Form = styled.form`
    background-color: rgb(238,238,238);
    display: flex;
    padding: 1em;
    gap: 0.5em;
    margin-bottom: 1em;
    border-radius: 5px;
`;

const Input = styled.input`
    font-family: "Lato", sans-serif;
    width: 25em;
    height: 1em;
    padding: 0.5em;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid #DCD6CC;
    @media only screen and (max-width: 600px) {
        width: 18em;
        font-size: 10px;
    }
`;

const Button = styled.button`
    background-color: rgb(244,241,234);
    border: 1px solid #D6D0C4;  
    padding: 0.4em;
    font-size: 14px;
    color: rgb(55,34,19);
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

const BookContainer = styled.button`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    gap: 1em;
`;