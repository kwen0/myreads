import { useState } from 'react';
import styled from 'styled-components';

function BookCard(props) {
    const { id,
        thumbnail,
        title,
        categories,
        pageCount,
        description,
        authors,
        publisher,
        infoLink } = props;

    function formattedAuthors(authors) {
        if (authors.length > 1) {
            return `${authors[0]}, ${authors[1]}`
        }
        else return authors
    }

    return (
        <StyledBookCard>
            <Thumbnail src={thumbnail}></Thumbnail>
            <Info>
                <Title>{title}</Title>
                <Authors>by {formattedAuthors(authors)}</Authors>
                <Category>{categories}</Category>
                <Buttons>
                    <WantToRead>Want To Read</WantToRead>
                    <MoreInfo>More Info</MoreInfo>
                </Buttons>
            </Info>
        </StyledBookCard>
    )
}

const Thumbnail = styled.img`
    height: 100px;
    width: 66px;
`;

const Info = styled.div`
    padding-left: 1em;
`;

const StyledBookCard = styled.div`
    display: flex;
    border-bottom: 1px solid #E8E8E8;
    width: 50vw;
    padding-bottom: 1em;
    @media only screen and (max-width: 600px) {
        width: 70vw;
    }
`;

const Title = styled.div`
    display: flex;
    text-align: left;
    font-family: "Merriweather";
    font-weight: 900;
    font-size: 14px;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Authors = styled.div`
    display: flex;
    text-align: left;
    font-size: 14px;
    font-family: "Merriweather";
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const Category = styled.div`
    display: flex;
    text-align: left;
    font-family: "Lato";
    color: rgb(153,153,153);
    font-size: 14px;
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const WantToRead = styled.button`
    display: flex;
    background-color: #409D68;
    color: white;
    border: none;
    padding: 0.3em 1em;
    font-size: 14px;
    border-radius: 3px;
    font-family: "Lato", sans-serif;
    &:hover {
        background-color: #2B7049;
        cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const MoreInfo = styled.button`
    display: flex;
    background-color: rgb(244,241,234);
    border: 1px solid #D6D0C4;  
    padding: 0.3em 1em;
    font-size: 14px;
    border-radius: 3px;
    font-family: "Lato", sans-serif;
    &:hover {
        background-color: #EDE6D6;
        cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: 0.5em;
`;
export default BookCard;