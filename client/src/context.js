import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const AppContext = createContext();

const AppProvider = ({ children }) => {

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

  const [keywords, setKeyWords] = useState("");
  const [products, setProducts] = useState(productsList);

  // function lowToHigh() {
  //   const sortedProducts = [...products].sort(
  //     (s1, s2) => s1.price - s2.price
  //   );
  //   setProducts(sortedProducts);
  // }

  // function highToLow() {
  //   const sortedProducts = [...products].sort(
  //     (s1, s2) => s2.price - s1.price
  //   );
  //   setProducts(sortedProducts);
  // }

  function checkSearch() {
    let newArr = keywords.trim().split(" ");
    var set = new Set();
    newArr.forEach(element => {
      let pdList = productsList.filter(function (el) {
        if(el.gender.toLowerCase().includes(element)){
          return el;
        }else{
          return null;
        }
      });
      let pdSet = new Set(pdList);
      set = new Set([...set,...pdSet]);
    });
    setProducts([...set]);
  }

  return (
    <AppContext.Provider value={{ keywords, setKeyWords, products, checkSearch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };