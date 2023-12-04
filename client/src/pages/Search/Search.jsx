import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './search.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = () => {

  const [productsList, setproductsList] = useState([]);

  const setData = async () => {
    try {
      await axios.get("http://localhost:8000/products").then((res) => { setproductsList(res.data) });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setData();
  })

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(productsList);

  const handleSearch = event => {
    const query = event.target.value;
    setSearchQuery(query);

    const queryWords = query.trim().toLowerCase().split(' ');

    const filteredProducts = productsList.filter(product =>
      queryWords.every(word => product.gender.toLowerCase().includes(word) || product.title.toLowerCase().includes(word) )
    );

    setSearchResults(filteredProducts);
  };

  const history = useNavigate();

  let handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      const searchQuery = e.target.value;
      history(`/search?query=${searchQuery}`);
    }
  }


  return (
    <div>
      <Navbar />
      <section className="serchBar text-center">
        <h3 style={{ textAlign: 'center', color: '#eeba2b' }}>Search your obsession</h3>
        <input onKeyDown={handleEnter} value={searchQuery} onChange={handleSearch} id='search_input' type="text" placeholder='search here' style={{ borderRadius: "5px", border: "0.2px solid #212529", width: '25rem', marginBottom: "40px" }} />
      </section>
      <section className='mensProductsContainer'>
        {
          searchResults.map((el) => {
            return (
              <div div className="commonClothesContainer" key={el._id}>
                <figure>
                  <img src={el.imgUrl} alt="" />
                </figure>
                <h5>{el.title}</h5>
                <h5>₹{el.price}</h5>
                <button style={{ backgroundColor: "#eeba2b", marginBottom: "5px", border: "none", width: "100%", borderRadius: "10px" }}>Buy Now</button>
                <button style={{ backgroundColor: "#eeba2b", border: "none", width: "100%", borderRadius: "10px" }}>Add to Cart</button>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Search