import React from "react";
import "./BooksList.css"

function BooksList({books, deleteBook}){

  

    function handleDelete(id){
        fetch(` http://localhost:3001/books/${id}`,{
            method:"DELETE"
        }
        )
        deleteBook(id)
    }
    


    return(
       <div id="cards-body">
        <div className="container">
        {books.map((book) => (
            <div key={book.id} className="card">
                 <img src={book.image} alt={book.title} style={{width:"10rem"}}/>
                <h5>Title: {book.title}</h5>
                <p className="text">Author: {book.author}</p>
                <p className="text">Genre: {book.genre}</p>
                <p className="text">Publication date: {book.datePublished}</p>
                <p className="text">Description: {book.summary}</p>
                <button onClick={handleDelete} >Delete</button>
            </div>
        )
         )}

        </div>

       
        
       </div>
       
    )   
}

export default BooksList;