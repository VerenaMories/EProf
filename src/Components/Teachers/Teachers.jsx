import plus from '../images/plus.png';
import { Link } from 'react-router-dom';
import verena from '../images/ins.jpg';
import omar from '../images/img8.jpg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';

export default function Teachers() {
	const [teacherData, setTeacherData] = useState([]);
	useEffect(() => {
		axios
		  .get("https://eprof-zu1o.onrender.com/instructor/all")
		  .then((response) => {
			setTeacherData(response.data.instructor);
			// console.log(response.data.instructor)
		  })
		  .catch((error) => {
			// console.log(error);
		  });
	  }, []);
	  const navigate = useNavigate();

	  function Nav(s) {
		navigate("/singleTeacher/" + s);
	  }
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<>
<section class="pager-section">
			<div class="container">
				<div class="pager-content text-center">
				<Fade top duration={1000} delay={500}>		<h2>Instructor</h2></Fade>
					<ul>
						<li>  <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link></li>
						<li><span>Instructor</span></li>
					</ul>
				</div>
                <h2 class="page-titlee"><span style={{fontFamily:'flanella', color:'#c5892b'}}>E</span> <span style={{color:'#3c719a' , fontFamily:'azonix'}}> PROF</span></h2>
			</div>
		</section>

        <section class="page-content">
			<div class="container">
				<div class="teachers-section p-0">
				
        	<div class="teachers">
         	
          <div class="row">
        
  {teacherData.filter(item => !item.block).map(item => (
    <div class="col-lg-4 col-md-4 col-sm-12  full-wdth" key={item._id}>
       
        <div class="teacher">
        <div class="teacher-img">
        <img  onClick={() => Nav(item._id)}
  src={item.img ? item.img : verena}
  alt=""
  style={{width:'368px', height:'624px',cursor:'pointer'}}/>
          {/* <img src={verena} alt="" class="w-100" /> */}
          <div class="sc-div">
          <ul style={{ paddingLeft: "0px" }}>
            {item.socialMedia && item.socialMedia.whatsapp && (
              <li>
                <a   target="_blank"
                  href={`https://wa.me/${item.socialMedia.whatsapp}`}
                  title=""
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
            )}
            {item.socialMedia && item.socialMedia.linkedIn && (
              <li>
                <a  target="_blank"
                  href={`https://www.linkedin.com/in/${item.socialMedia.linkedIn}`}
                  title=""
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            )}
            {item.socialMedia && item.socialMedia.facebook && (
              <li>
                <a  target="_blank"
                  href={`https://www.facebook.com/${item.socialMedia.facebook}`}
                  title=""
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            )}
          </ul>
            <span>
              <img src={plus} alt="" />
            </span>
          </div>
        </div>
        <div class="teacher-info">
        <Fade top duration={1000} delay={500}>
            <h3>
            <a
              onClick={() => Nav(item._id)}
              title=""
              style={{ textDecoration: "none", color: "#3c719a", cursor:'pointer' }}
            >
              {item.name}{" "}
            </a>
          </h3></Fade>
          {item.subjectId 
                          ? item.subjectId .map((year, index) => (
                              <span  style={{ color: "#c5892b",display:'inline' }} key={year._id}>
                                {year.name}  
                                {index < item.subjectId .length - 1
                                  ? " ,  "
                                  : ""}
                                 
                              </span>
                            ))
                          : null}

          {/* {item.subjectId && (
            <span style={{ color: "#c5892b" }}>
              {" "}
              {item.subjectId.name} Teacher
            </span>
          )} */}
          {/* {console.log(item.subjectId?.name)} */}
        </div>
      </div>
    </div>
  ))}
</div>
					</div>
				</div>
				{/* <div class="mdp-pagiation">
					<nav aria-label="Page navigation example">
						<ul class="pagination">
					    	<li class="page-item"><a class="page-link" href="#">1</a></li>
					    	<li class="page-item"><a class="page-link active" href="#">2</a></li>
					    	<li class="page-item"><a class="page-link" href="#">3</a></li>
					    	<li class="page-item"><a class="page-link" href="#">4</a></li>
					    	<li class="page-item"><a class="page-link" href="#">...</a></li>
					    	<li class="page-item"><a class="page-link" href="#">15</a></li>
					  	</ul>
					</nav>
				</div> */}
			</div>
		</section>

	
</>  )
}
