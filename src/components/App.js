import React, { useState, useEffect } from "react";
import BooksList from "./BooksList";
import NewBookForm from "./NewBookForm";
import About from "./About";

function App(){

    const [booksInList, setBooksInList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/books")
        .then(res => res.json())
        .then(data => setBooksInList(data))
    }, [])
console.log(booksInList)

function addNewBook(newBook){
    const newList = [...booksInList, newBook]
    setBooksInList(newList)
}



function deleteBook(id){
    const newList = booksInList.filter((book) => book.id !== id)
    setBooksInList(newList)
}




    return(
        <div>
            <NewBookForm 
            newListUpdate={addNewBook}
           
            />
            <BooksList 
            books={booksInList}
            deleteBook={deleteBook}
            
            />
            <About/>
        </div>

    )
    }

export default App;
