import { React, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import './cart.css'

const Cart = () => {

    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const setData = async () => {
        try {
            await axios.get("http://localhost:8000/products").then((res) => { setProducts(res.data) });
            await axios.get("http://localhost:8000/products/cart").then((res) => { setCartProducts(res.data) });
        } catch (error) {
            console.log(error);
        }
    }

    const { isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        setData();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        });

        const hiddenelements = document.querySelectorAll('.hidden');
        hiddenelements.forEach((el) => observer.observe(el));
    })

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/user' />
    }

    return (
        <div>
            <Navbar />
            <h1 className='hidden' style={{ textAlign: 'center' }}>Your Cart</h1>
            <section className='cartProductsContainer'>
                {
                    cartProducts.map((pr) => {
                        return (

                            products.map((el) => {
                                
                                if (pr.productID === el._id) {
                                    async function deleteData() {
                                        try {
                                            const id = el._id;
                                            await axios.delete("http://localhost:8000/products/deleteCartData/"+id)
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }
                                    return (
                                        <div div className="commonCartContainer hidden" >
                                            <figure style={{ width: "25%" }}>
                                                <img src={el.imgUrl} alt="" style={{ width: "100%" }} />
                                            </figure>
                                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                                <h5>₹{el.price}</h5>
                                                <h5>Quantity : {pr.quantity}</h5>
                                                <button style={{ backgroundColor: "#eeba2b", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }}>Buy Now</button>
                                                <button onClick={deleteData} style={{ backgroundColor: "red", color: "white", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        )
                    })
                }
            </section>
            <Footer />
        </div>
    )
}

export default Cart