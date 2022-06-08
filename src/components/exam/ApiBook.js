import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiBook = () => {

    const [author, setauthor] = useState('')
    const [name, setname] = useState('')
    const [type, settype] = useState('')
    const [price, setprice] = useState('')
    const [books, setbooks] = useState([])
    

    const addBook = (e) =>{
        e.preventDefault()
        var book = {
            author:author,
            category:type,
            name : name,
            price : price
        }

        axios.post("https://yakshapi.herokuapp.com/book",book).then(res=>{
            if(res.status === 200){
                console.log("Book Added successfully")
            }
        })
    }

    const allBooks = () =>{
        axios.get("https://yakshapi.herokuapp.com/books").then(res=>{
            console.log(res.data);
            setbooks(res.data);
        })
    }

    useEffect(() => {
      allBooks()
    }, [])
    
    
  return (
    <div>
        <form onSubmit={addBook}>
            Book Name : <input type = "text" onChange={(e)=>setname(e.target.value)}/><br></br>
            Book Price : <input type = "text" onChange={(e)=>setprice(e.target.value)}/><br></br>
            Book Author : <input type = "text" onChange={(e)=>setauthor(e.target.value)}/><br></br>
            Book Type : <input type = "text" onChange={(e)=>settype(e.target.value)}/><br></br>
            <input type="submit"/>
        </form>
        {/* <Button className = "btn btn-primary">
            Get All Books
        </Button> */}
        <div>
        <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Book Price</th>
                        <th scope="col">Book Category</th>
                        
                        
                    </tr>
                </thead>
                
                <tbody>
                    {
                        books.map((book) => {
                            return (<tr>
                                <th scope="row">{book.bookId}</th>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>{book.category}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
    </div>
  )
}
