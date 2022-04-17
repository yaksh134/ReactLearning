import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateProduct } from './UpdateProduct';

export const GetProducts = () => {

   const [products, setproducts] = useState([])
   
   const getProducts = async() =>{
        axios.get("https://healthy-me-rest-api.herokuapp.com/products").then(res=>{
            setproducts(res.data.data)
        })
   }

   useEffect(() => {
     getProducts()
   
     return () => {
       
     }
   }, [])

   const deleteproduct = async(id) =>{
       console.log(id)
       axios.delete("https://healthy-me-rest-api.herokuapp.com/products/"+id).then(res=>{
           console.log(res.status)
          
            toast.error(`${res.data.data.name} deleted `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           
           getProducts()
       })
   }

   
   


  return (
    <div>
        <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (<tr>
                                <th scope="row">{product.productId}</th>
                                <td>{product.name}</td>
                                <td>{product.qty}</td>
                                <td>{product.price}</td>
                                <td><button className="btn btn-danger" onClick={() => {deleteproduct(product.productId)}}>DELETE PRODUCT</button></td>
                                <td><Link to = {`/UpdateProduct/${product.productId}`}><button className="btn btn-warning">UPDATE PRODUCT</button></Link></td>

                            </tr>

                            )
                        })
                    }


                </tbody>
            </table>
    </div>
  )
}
