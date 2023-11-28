import React, {useState} from "react";

function NewBookForm({newListUpdate}){
    const [formData, setFormData] = useState({
        title:"",
        author:"",
        image:"",
        genre:"",
        datePublished:"",
        summary:""
    })

    function handleSubmit(e){
        e.preventDefault()
        const bookObj = {
            book:{
            image: formData.image,
            title: formData.title,
            genre: formData.genre,
            author: formData.author,
            datePublished: formData.datePublished,
            summary: formData.summary
            }
        }
        fetch("http://localhost:3001/books",{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookObj.data )
        }
        ).then(res => res.json())
         .then(data => newListUpdate(data))

    }
     function handleChange(event){
        setFormData({
            ...formData,
            [event.target.id]:event.target.value
        })
     }

    

    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title
            <input type="text" id="title" value={formData.title} onChange={handleChange} />
            </label>
            <label htmlFor="author">Author
            <input type="text" id="author" value={formData.author} onChange={handleChange} />
            </label>
            <label htmlFor="image">Image
            <input type="text" id="image" value={formData.image} onChange={handleChange} />
            </label>
            <label htmlFor="genre">Genre
            <input type="text" id="genre" value={formData.genre} onChange={handleChange} />
            </label>
            <label htmlFor="date">Publication Date
            <input type="date" id="datePublished" value={formData.datePublished} onChange={handleChange} />
            </label>
            <label htmlFor="summary">Description
            <input type="text" id="summary" value={formData.summary} onChange={handleChange} />
            </label>
            <button type="submit">Add Book</button>
        </form>
    )

}

export default NewBookForm;