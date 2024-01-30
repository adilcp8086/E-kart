import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices1/wishlistSlice1'
import { addToCart, emptyCart, removeFromCartlist } from '../redux/slices1/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  
  const cartItems = useSelector((state) => state.cartReducer)
  let totalPrice=0
  cartItems?.forEach(item =>{
    let q =item.price * item.quantity
    totalPrice=totalPrice+q
  })
  let totalQ=0
  cartItems?.forEach(item =>{
    totalQ=totalQ+item.quantity
  })
 
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleCheckout = ()=>{
    alert("Successfully placed the order")
    dispatch(emptyCart())
    navigate('/')
    
  }

  return (
    <>
    <button style={{ marginTop: '150px' }} className='btn btn-success ms-5'>
      <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-arrow-left me-2"></i>
        Back To Home</Link>
    </button>
    <div className='row w-100'>
          <div className='col-lg-6 col-md-6 m-5'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.length > 0 ?
                  cartItems?.map((item,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td><img height={'50px'} width={'50px'}   src={item.thumbnail} alt="" /></td>
                    <td>{item.price} &#8377;</td>
                    
                    <td> <button onClick={()=>dispatch(addToCart (item))}>+ </button >{item.quantity}<button onClick={()=>dispatch(removeFromCartlist(item.id))}> -</button></td>
                    <td>
                    <Button variant='btn btn-outline-danger' onClick={()=>dispatch(removeFromCartlist(item.id))}>
                      <i class="fa-solid fa-trash" ></i>
                      </Button>
                    </td>
                  </tr>
                  )):
                  <p className='text-danger'>No items in cart</p>
                }
              </tbody>
            </table>
          </div> 
          <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
          <div className="border shadow p-5">
            <h3 className="text-primary">Cart Summary</h3>
            <h5>Total no.of Products : <span className='fw-bolder text-warning ms-2'>{totalQ}</span></h5>
            <h5>Total price : <span  className='fw-bolder text-warning ms-2'>{totalPrice}</span ></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Check out</button>
          </div>
        </div>
      </div>
  </>
  )
}
export default Cart