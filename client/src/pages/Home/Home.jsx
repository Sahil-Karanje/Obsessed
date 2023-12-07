import React, { useEffect } from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import homeImg from '../../Assets/Obsessed with Trend....png';
import CardContainer from '../../components/Card/CardContainer';
import Carousel from 'react-bootstrap/Carousel';
import tshirt from '../../Assets/photo-1562157873-818bc0726f68.jpeg';
import Footer from '../../components/Footer/Footer';
import shoe1 from '../../Assets/shoe1.png';
import shoe2 from '../../Assets/shoe2.png';
import shoe3 from '../../Assets/shoe3.png';

const Home = () => {

  const trendingProducts1 = [
    {
      "imgUrl": "https://res.cloudinary.com/dqhd4b1ht/image/upload/v1693890294/Obsessed%20Products%20Images/bdthlruschcs91myomzg.jpg",
      "price": 4000,
    },
    {
      "imgUrl": "https://res.cloudinary.com/dqhd4b1ht/image/upload/v1693888947/Obsessed%20Products%20Images/tuviwubyobfvu4xj5mfp.jpg",
      "price": 4000,
    },
    {
      "imgUrl": "https://res.cloudinary.com/dqhd4b1ht/image/upload/v1693890293/Obsessed%20Products%20Images/ak6jskrs8ek0ayuezgaw.jpg",
      "price": 4000,
    }
  ];
  const trendingProducts2 = [
    {
      "imgUrl": "https://res.cloudinary.com/dqhd4b1ht/image/upload/v1693890293/Obsessed%20Products%20Images/bcs4r45lsv8kdu5jfodt.jpg",
      "price": 4000,
    },
    {
      "imgUrl": "https://res.cloudinary.com/dqhd4b1ht/image/upload/v1693890293/Obsessed%20Products%20Images/b1ldig7tqkdsssg78wle.jpg",
      "price": 4000,
    },
    {
      "imgUrl": "https://res.cloudinary.com/dqhd4b1ht/image/upload/v1693890293/Obsessed%20Products%20Images/pdqa23me8hjvvgdzbass.jpg",
      "price": 4000,
    }
  ];

  useEffect(() => {
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
  }, [])

  return (
    <div>
      <Navbar />
      <section id='home-first-img'>
        <figure className='hidden'>
          <img src={homeImg} alt="" />
        </figure>
      </section>
      <section id="trending" className='hidden'>
        <h1 style={{ textAlign: 'center', margin: '50px 0' }}>Trending</h1>
        <Carousel>
          <Carousel.Item style={{ backgroundColor: '#212529', padding: '60px' }}>
            <CardContainer trendingProducts={trendingProducts1} />
          </Carousel.Item>

          <Carousel.Item style={{ backgroundColor: '#212529', padding: '60px' }}>
            <CardContainer trendingProducts={trendingProducts2} />
          </Carousel.Item>
        </Carousel>
      </section>

      <section id='plain t-shirts' className='hidden' style={{ marginBottom: "50px" }}>
        <h1 style={{ textAlign: 'center', margin: '50px 0' }}>T shirts</h1>
        <div className="tshirtContainer">
          <div className="tshirtContainer_text d-flex flex-column justify-content-center align-items-center" style={{ width: "50%" }}>
            <h1 className='headingOfFirstSection' style={{textAlign:'center'}}>Premium T shirt</h1>
            <h2 className='headingOfFirstSection' style={{textAlign:'center'}}>at just ₹400</h2>
          </div>
          <div className="tshirtContainer_img d-flex justify-content-center align-items-center" style={{ width: "50%" }}>
            <img src={tshirt} alt="" style={{ width: "50%" }} />
          </div>
        </div>
      </section>

      <section id="shoes" className='hidden' style={{ marginBottom: "50px" }}>
        <h1 style={{ textAlign: 'center', margin: '50px 0' }}>Shoes</h1>
        <div className="d-flex justify-content-space-between align-items-center w-100">
          <div className="shoesImgs d-flex flex-column justify-content-center align-items-center" style={{ width: '50%' }}>
            <div className="s1 d-flex justify-content-end" style={{ width: '100%' }}>
              <img src={shoe1} alt="" style={{ width: '30%' }} />
            </div>
            <div className="s2 d-flex justify-content-center" style={{ width: '100%' }}>
              <img src={shoe2} alt="" style={{ width: '30%' }} />
            </div>
            <div className="s3 d-flex justify-content-end" style={{ width: '100%' }}>
              <img src={shoe3} alt="" style={{ width: '30%' }} />
            </div>
          </div>

          <div className="shoeText d-flex justify-content-center align-items-center" style={{ width: '50%' }}>
            <h2 id='secondSectionSideText' style={{textAlign:'center',width:'80%'}}>Give your dressing a shine</h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home