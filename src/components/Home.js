import Header from "./Header"

function Home() {
    // fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyA-X5yCIhkEn70GfQhittAlUznwetUkIkc`
    // )
    //     .then(response => console.log(response.json()))
    //     .then(result => {
    //         this.setState({ books: result.items })
    //     })

    return (
        <Header />
    )
}

export default Home;