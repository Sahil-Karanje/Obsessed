import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import './SP.css'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {

  const [product, setProduct] = useState({});
  const [similarproducts, setsimilarProducts] = useState([]);

  const { id } = useParams();
  const setData = async () => {
    try {
      await axios.get("http://localhost:8000/products/" + id).then((res) => { setProduct(res.data) });
      await axios.get("http://localhost:8000/products").then((res) => { setsimilarProducts(res.data) });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setData();
  })

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


  return (
    <div>
      <Navbar />
      <div className='d-flex justify-content-space-between align-items-center' style={{ height: "100vh" }}>
        <div className="Sproduct_img" style={{ width: "50%" }}>
          <figure className='d-flex justify-content-center align-items-center'>
            <img src={product.imgUrl} alt="" style={{ width: "50%" }} />
          </figure>
        </div>
        <div className="Sproduct_text" style={{ width: "50%" }}>
          <h1>{product.title}</h1>
          <h3>₹{product.price}</h3>
          <h5>Category : {product.category}</h5>
          <hr />
          <h5>Select Size :</h5>
          <div className="size">
            <button className="size_btn">32</button>
            <button className="size_btn">34</button>
            <button className="size_btn">36</button>
            <button className="size_btn">38</button>
            <button className="size_btn">40</button>
            <button className="size_btn">42</button>
          </div>
          <div className="SP_btn mt-4">
            <button style={{ backgroundColor: "#212529", color:"white", marginRight:"10px" ,border: "none", borderRadius: "10px",padding:"10px" }}>Buy Now</button>
            <button onClick={gotoCart} style={{ backgroundColor: "#212529", color:"white", border: "none", borderRadius: "10px",padding:"10px" }}>Add to Cart</button>
          </div>
          <hr />
          <h5>Description :</h5>
          <div className="desc">
            <p>1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>5. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>6. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>7. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>8. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
            <p>9. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, doloribus.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="moreProducts">
        <h1 style={{textAlign:"center"}}>Similar Products</h1>
        <div className="simlarPr d-flex">
          {
            similarproducts.map((el)=>{
              if(product.category===el.category){
                return(
                  <div className='commonClothesContainer'>
                    <figure>
                    <Link to={"/product/" + id}><img src={el.imgUrl} alt=""/></Link>
                    </figure>
                    <h5>₹{el.price}</h5>
                    <button style={{ backgroundColor: "#eeba2b", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }}>Buy Now</button>
                    <button onClick={gotoCart} style={{ backgroundColor: "#eeba2b", border: "none", width: "100%", borderRadius: "10px" }}>Add to Cart</button>
                  </div>
                )
              }else{
                return null;
              }
            })
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SingleProductPage