import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal'

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

    const formattedAuthors = (authors) => {
        if (authors.length > 1) {
            return `${authors[0]}, ${authors[1]}`
        }
        else return authors
    }

    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <>
            <StyledBookCard>
                <Thumbnail src={thumbnail}></Thumbnail>
                <Info>
                    <Title>{title}</Title>
                    <Authors>by {formattedAuthors(authors)}</Authors>
                    <Category>{categories}</Category>
                    <Buttons>
                        <WantToRead>Want to Read</WantToRead>
                        <MoreInfo onClick={toggleModal}>More Info</MoreInfo>
                    </Buttons>
                </Info>
            </StyledBookCard>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                <ModalLeft>
                    <ModalThumbnail src={thumbnail}></ModalThumbnail>
                    <WantToRead>Want to Read</WantToRead>
                </ModalLeft>
                <ModalInfo>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalAuthors>by {formattedAuthors(authors)}</ModalAuthors>
                    <ModalCategory>{categories}</ModalCategory>
                    <ModalPages>{pageCount} pages</ModalPages>
                    <ModalPublisher>{publisher ? `Published by ${publisher}` : null}</ModalPublisher>
                    <ModalDesc>{description}</ModalDesc>
                    <Close onClick={toggleModal}>Close</Close>
                </ModalInfo>
            </StyledModal>
        </>
    )
}

const Thumbnail = styled.img`
    height: 100px;
    width: 66px;
`;

const Info = styled.div`
    padding-left: 1em;
    display: flex;
    flex-direction: column;
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

const StyledModal = Modal.styled`
  width: 50vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  padding: 2em;
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    padding: 1em;
    width: 70vw;
}
`;

const ModalThumbnail = styled.img`
    height: 200px;
    @media only screen and (max-width: 600px) {
        height: 100px;
    }
`;

const ModalLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

const ModalTitle = styled(Title)`
    font-size: 18px;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ModalAuthors = styled(Authors)`
    font-size: 16px;
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const ModalCategory = styled(Category)`
`;

const ModalInfo = styled(Info)`
`;

const ModalPages = styled(Category)`
`;

const ModalPublisher = styled(Category)`
`;

const ModalDesc = styled.div`
    font-size: 12px;
    padding: 1em 0em;
    @media only screen and (max-width: 600px) {
        font-size: 8px;
    }
`;

const Close = styled.button`
    font-size: 12px;
    align-self: flex-end;
    background: transparent;
    border: none;
    font-family: "Lato";
    color: rgb(153,153,153);
    &:hover {
        cursor: pointer;
        color: rgb(55,34,19);
    }
    @media only screen and (max-width: 600px) {
        font-size: 8px;
    }
`;


export default BookCard;