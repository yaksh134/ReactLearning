import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const UpdateProduct = () => {
  let id = useParams().id


  const [product, setproduct] = useState('')
  const [productname, setproductname] = useState('')
  const [productprice, setproductprice] = useState('')
  const [productquantity, setproductquantity] = useState('')

  const updatedproductsubmit = async() =>{
    

    var product = {
      "productId": id,
      "name": productname,
      "qty": productquantity,
      "price": productprice
    }

    axios.put("https://healthy-me-rest-api.herokuapp.com/products2/"+id,product).then(res=>{
      console.log(res.status)
      
        toast.success(`${res.data.data.name} updated successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      
    })

    
  }

  const getProductbyID = async() => {
    axios.get("https://healthy-me-rest-api.herokuapp.com/products/"+id).then((res)=>{
      setproduct(res.data.data)
      setproductname(res.data.data.name)
      setproductprice(res.data.data.price)
      setproductquantity(res.data.data.qty)

      console.log(res.data.data)
    })
  }

  useEffect(() => {
    getProductbyID()
  
    return () => {
      
    }
  }, [])

  
  




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
        <form onSubmit={updatedproductsubmit}>
        <div class="form-group">
            <label for="exampleInputEmail1">Updated Product Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" defaultValue={product.name}
            onChange={(e)=>setproductname(e.target.value)}
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Updated Product Price</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Price" defaultValue={product.price}
            onChange={(e)=>setproductprice(e.target.value)}/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Updated Product Quantity</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Quantity" defaultValue={product.qty}
            onChange={(e)=>setproductquantity(e.target.value)}
            />
        </div>
        
        <button type="submit" class="btn btn-primary">Update Product</button>
</form>
</div>
    </div>
  )
}
