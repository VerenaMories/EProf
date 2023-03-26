import React, { useState, useEffect } from "react";
import icon10 from '../images/icon10.png';

const carouselData = [
  { id: 1, content: 
  <div class=" col-lg-3" data-bs-interval="2000">

<div  data-wow-duration="1000ms">
    <div class="class-thumb">
        <img src="https://via.placeholder.com/1680x1120" alt="" style={{width:'50%'}}/>
        <a href="contacts.html" title="" class="crt-btn">
            <img src={icon10} alt=""/>
        </a>
    </div>
    <div class="class-info" style={{width:'50%'}}>
        <h3><a href="class-single.html" title="">Basic English Speaking and Grammar</a></h3>
        <span>Mon-Fri</span>
        <span>10 AM - 12 AM</span>
        <div class="d-flex flex-wrap align-items-center">
            <div class="posted-by">
                <img src="https://via.placeholder.com/26x26" alt=""/>
                <a href="#" title="">Amanda Kern</a>
            </div>
            <strong class="price">$45</strong>
        </div>
    </div>
</div>
</ div> },
  { id: 2, content:
   <div class=" active col-lg-3" data-bs-interval="10000">
 
  <div  data-wow-duration="1000ms">
      <div class="class-thumb">
          <img src="https://via.placeholder.com/1680x1120" alt="" style={{width:'50%'}}/>
          <a href="contacts.html" title="" class="crt-btn" >
              <img src={icon10} alt=""/>
          </a>
      </div>
      <div class="class-info" style={{width:'50%'}}>
          <h3><a href="class-single.html" title="">Basic English Speaking and Grammar</a></h3>
          <span>Mon-Fri</span>
          <span>10 AM - 12 AM</span>
          <div class="d-flex flex-wrap align-items-center">
              <div class="posted-by">
                  <img src="https://via.placeholder.com/26x26" alt=""/>
                  <a href="#" title="">Amanda Kern</a>
              </div>
              <strong class="price">$45</strong>
          </div>
      </div>
  </div>
  </div> },
  { id: 3, content: 
  <div class=" col-lg-3">

  <div  data-wow-duration="1000ms" data-wow-delay="600ms">
      <div class="class-thumb">
          <img src="https://via.placeholder.com/1296x864" alt="" style={{width:'50%'}}/>
          <a href="contacts.html" title="" class="crt-btn">
              <img src={icon10} alt=""/>
          </a>
      </div>
      <div class="class-info" style={{width:'50%'}}>
          <h3><a href="class-single.html" title="">Hospitality, Leisure & Sports Courses</a></h3>
          <span>Mon-Fri</span>
          <span>10 AM - 12 AM</span>
          <div class="d-flex flex-wrap align-items-center">
              <div class="posted-by">
                  <img src="https://via.placeholder.com/26x26" alt=""/>
                  <a href="#" title="">Hubert Franck</a>
              </div>
              <strong class="price">$67</strong>
          </div>
      </div>
  </div>
  </div> },
  { id: 4, content:
   <div class=" col-lg-3">

  <div  data-wow-duration="1000ms" data-wow-delay="600ms">
      <div class="class-thumb">
          <img src="https://via.placeholder.com/1296x864" alt="" style={{width:'50%'}}/>
          <a href="contacts.html" title="" class="crt-btn">
              <img src={icon10} alt=""/>
          </a>
      </div>
      <div class="class-info" style={{width:'50%'}}>
          <h3><a href="class-single.html" title="">Hospitality, Leisure & Sports Courses</a></h3>
          <span>Mon-Fri</span>
          <span>10 AM - 12 AM</span>
          <div class="d-flex flex-wrap align-items-center">
              <div class="posted-by">
                  <img src="https://via.placeholder.com/26x26" alt=""/>
                  <a href="#" title="">Hubert Franck</a>
              </div>
              <strong class="price">$67</strong>
          </div>
      </div>
  </div>
  </div>},
//   { id: 5, content: "Div 5" },
//   { id: 6, content: "Div 6" },
//   { id: 7, content: "Div 7" },
//   { id: 8, content: "Div 8" },
//   { id: 9, content: "Div 9" },
//   { id: 10, content: "Div 10" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 4) % carouselData.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const currentDivs = carouselData.slice(currentIndex, currentIndex + 4);

  return (
    <div className="carousel">
      {currentDivs.map((div) => (
        <div key={div.id} className="carousel__item">
          {div.content}
        </div>
      ))}
    </div>
  );
};

export default Carousel;

