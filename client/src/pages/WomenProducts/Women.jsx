import { React, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Women = () => {

  const [products, setProducts] = useState([]);

  const setData = async () => {
    try {
      await axios.get("http://localhost:8000/products").then((res) => { setProducts(res.data) });
    } catch (error) {
      console.log(error);
    }
  }

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

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }} className='hidden'>Women's section</h1>

      <section className='mensProductsContainer'>
        {
          products.map((el) => {
            const id = el._id;
            function gotoCart(e) {
              e.preventDefault();

              try {
                axios.post("http://localhost:8000/products/addtocart", {
                  "productID": id,
                });
              } catch (error) {
                console.log(error);
              }
            }
            if (el.gender === "female" && el.category === "clothes") {
              return (
                <div div className="commonClothesContainer hidden" >
                  <figure>
                    <Link to={"/product/" + id}><img src={el.imgUrl} alt="" /></Link>
                  </figure>
                  <h5>{el.title}</h5>
                  <h5>₹{el.price}</h5>
                  <Link to="/payment" style={{width:"100%"}}><button style={{ backgroundColor: "#eeba2b", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }}>Buy Now</button></Link>
                  <button onClick={gotoCart} style={{ backgroundColor: "#eeba2b", border: "none", width: "100%", borderRadius: "10px" }}>Add to Cart</button>
                </div>
              )
            } else {
              return null;
            }

          })
        }
      </section >

      <section className='mensProductsContainer'>
        {
          products.map((el) => {
            const id = el._id;
            function gotoCart(e) {
              e.preventDefault();

              try {
                axios.post("http://localhost:8000/products/addtocart", {
                  "productID": id,
                });
              } catch (error) {
                console.log(error);
              }
            }
            if (el.gender === "female" && el.category === "accessories") {
              return (
                <div div className="commonClothesContainer hidden" >
                  <figure>
                    <Link to={"/product/" + id}><img src={el.imgUrl} alt="" /></Link>
                  </figure>
                  <h5>{el.title}</h5>
                  <h5>₹{el.price}</h5>
                  <Link to="/payment" style={{width:"100%"}}><button style={{ backgroundColor: "#eeba2b", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }}>Buy Now</button></Link>
                  <button onClick={gotoCart} style={{ backgroundColor: "#eeba2b", border: "none", width: "100%", borderRadius: "10px" }}>Add to Cart</button>
                </div>
              )
            } else {
              return null;
            }

          })
        }
      </section >

      <section className='mensProductsContainer'>
        {
          products.map((el) => {
            const id = el._id;
            function gotoCart(e) {
              e.preventDefault();

              try {
                axios.post("http://localhost:8000/products/addtocart", {
                  "productID": id,
                });
              } catch (error) {
                console.log(error);
              }
            }
            if (el.gender === "female" && el.category === "shoes") {
              return (
                <div div className="commonClothesContainer hidden" >
                  <figure>
                    <Link to={"/product/" + id}><img src={el.imgUrl} alt="" /></Link>
                  </figure>
                  <h5>{el.title}</h5>
                  <h5>₹{el.price}</h5>
                  <Link to="/payment" style={{width:"100%"}}><button style={{ backgroundColor: "#eeba2b", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }} >Buy Now</button></Link>
                  <button onClick={gotoCart} style={{ backgroundColor: "#eeba2b", border: "none", width: "100%", borderRadius: "10px" }}>Add to Cart</button>
                </div>
              )
            } else {
              return null;
            }

          })
        }
      </section >

      <Footer />
    </div>
  )
}

export default Women