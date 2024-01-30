import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices1/wishlistSlice1'
import { addToCart } from '../redux/slices1/cartSlice'

function Wishlist() {
  const wishlistItems = useSelector((state) => state. wishlistReducer)
  const dispatch=useDispatch()
  const handelWishlist=(item)=>{dispatch(addToCart(item))
  dispatch(removeFromWishlist(item.id))
  }
  console.log("===========")
  console.log(wishlistItems)
  return (
    <>
    <button style={{marginTop:"110px"}} className='btn btn-success ms-4'>
      <Link to={'/'} style={{textDecoration:"none", color:"white"} }><i class="fa-solid fa-arrow-left-long me-2"></i>Back to home</Link></button>
    <Row className='ms-5' style={{marginTop:"150px"}}>
        {
          wishlistItems?.length > 0 ?
            wishlistItems.map((item) => (

              <Col lassName='mb-5' sm={12} md={6} lg={4} xl={3}>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'}/>
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-success" onClick={()=>handelWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                      <Button variant="outline-danger "onClick={()=>dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
                    </div>

                  </Card.Body>
                </Card>


              </Col>

            )) :
            <p>NO items in wishlist</p>


        }


      </Row>
    </>
  )
}

export default Wishlist