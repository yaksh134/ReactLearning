import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProduct = () => {
const [productname, setproductname] = useState('')
const [productprice, setproductprice] = useState('')
const [productquantity, setproductquantity] = useState('')

const addproductsubmit = (e) =>{
    e.preventDefault()
    var product = {
        "name": productname,
        "price": productprice,
        "qty": productquantity
    }
    axios.post("https://healthy-me-rest-api.herokuapp.com/products",product).then(res=>{
        if(res.status === 200){
            toast.success(`${res.data.data.name} added successfully`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            toast.error(`product not added `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }
    })


}
  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <div className='container'>
        <form onSubmit={addproductsubmit}>
        <div class="form-group">
            <label for="exampleInputEmail1">Product Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name"
            onChange={(e)=>setproductname(e.target.value)}
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Product Price</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Price"
            onChange={(e)=>setproductprice(e.target.value)}/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Product Quantity</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Quantity"
            onChange={(e)=>setproductquantity(e.target.value)}
            />
        </div>
        
        <button type="submit" class="btn btn-primary">Add Product</button>
</form>
</div>

    </div>
  )
}
