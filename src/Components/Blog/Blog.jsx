import icon10 from '../images/icon10.png';
import { Link } from 'react-router-dom';
import maths from '../images/maths.png';
import React, { useState, useEffect ,useRef } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';



export default function Blog() {
	const [teacherData, setTeacherData] = useState([]);
	useEffect(() => {
		axios
		  .get("https://eprof-zu1o.onrender.com/blog/all")
		  .then((response) => {
			setTeacherData(response.data);
			// console.log(response.data)
		  })
		  .catch((error) => {
			// console.log(error);
		  });
	  }, []);
	  const navigate = useNavigate();

	  function Nav(s) {
		navigate("/singleBlog/" + s);
	  }
	  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<>
<section class="pager-section">
			<div class="container">
				<div class="pager-content text-center">
				<Fade top duration={1000} delay={500}> <h2>Blogs </h2></Fade>
					<ul>
						<li><Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link></li>
						<li><span>Blogs</span></li>
					</ul>
				</div>
                <h2 class="page-titlee"><span style={{fontFamily:'flanella', color:'#c5892b'}}>E</span> <span style={{color:'#3c719a' , fontFamily:'azonix'}}> PROF</span></h2>
			</div>
		</section>
        <section class="classes-page">
			<div class="container">
				
				<div class="classes-section">
					<div class="classes-sec">
						<div class="row">
						
	   {teacherData.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-6" key={item._id}>
      <Fade left duration={1000} delay={500}>
		   <div className="classes-col">
            <div className="class-thumb">
			<img src={item.img} alt="" className='w-100' onClick={() => Nav(item._id)}  style={{height:'205px',cursor:'pointer'}}/>

           
            </div>
            <div className="class-info">
              <h3><a
			 onClick={() => Nav(item._id)} 
			  style={{textDecoration:'none', color:'#3c719a', cursor:'pointer'}} title="">{item.titleEnglish}</a></h3>
            <div className="row" style={{marginBottom:'13px'}}>	  
	
			<div className="col" style={{display:'flex' }}>  <span style={{color:'#c5892b' , textAlign:'left'}}>{item.descriptionEnglish}</span></div>
			
</div>
		
              <div className="d-flex flex-wrap align-items-center">
                <div className="posted-by">
            
                  <a  onClick={() => Nav(item._id)}  title="" className='customRead'  style={{textDecoration:'none', cursor:'pointer', fontSize:'16px'}}>Read More...</a>
                </div>
        
              </div>
            </div>
          </div></Fade> 
        </div>
      ))}

						</div>
					</div>
				
				</div>
			</div>
		</section>
</>   )
}
