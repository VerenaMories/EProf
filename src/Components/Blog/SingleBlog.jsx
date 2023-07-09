import React, {useState,useEffect} from 'react'
import abt1 from "../images/abt1.png";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


export default function SingleBlog() {
    const [singleBlog, setSingleBlog] = useState([]);
    let { _id } = useParams();
    async function getSingleBlog() {
      let { data } = await axios.get(
        "https://eprof-zu1o.onrender.com/blog/" + _id
      );
  
      setSingleBlog(data.blog);
      // console.log(data.blog);
     
      // console.log(data.instructor);
  
    }
    useEffect(() => {
        getSingleBlog();
       
    }, []);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
<>
<section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
          <Fade top duration={1000} delay={500}> <h2 style={{fontSize:'42px'}}>{singleBlog.titleEnglish}</h2></Fade>
            <ul>
              <li>
              <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link>
              </li>
              <li>
                <span>{singleBlog.titleEnglish}</span>
              </li>
            </ul>
          </div>
          <h2 class="page-titlee">
            <span style={{ fontFamily: "flanella", color: "#c5892b" }}>E</span>{" "}
            <span style={{ color: "#3c719a", fontFamily: "azonix" }}>
              {" "}
              PROF
            </span>
          </h2>
        </div>
      </section>

      <section class="about-page-content" style={{paddingTop:'60px'}}>
        <div class="container">
          <div class="abt-page-row">
		  <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
              <Fade left duration={1000} delay={500}> <div class="section-title">
                 <p class="mw-100" style={{fontSize:'17px',textAlign: "justify"}}>
                  {singleBlog.bodyEnglish}
                  </p> 
            
                </div></Fade>
              </div>
              <div class="col-lg-6 col-md-6">
              <Fade right duration={1000} delay={500}> <div class="avt-img">
                  <img src={singleBlog.img} alt="" style={{width:'100%'}} />
                </div></Fade>
              </div>
            </div>
            </div>
            </div>
            </section>
</> 
 )
}
