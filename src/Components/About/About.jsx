import React,{useEffect} from "react";
import abt1 from "../images/abt1.png";
import abt2 from "../images/abt2.png";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Fade from 'react-reveal/Fade';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center"><Fade top duration={1000} delay={500}>	
            <h2>About Us</h2></Fade>
            <ul>
              <li>
              <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link>
              </li>
              <li>
                <span>About Us</span>
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
            {isMobile?
            <div class="row align-items-center">
               <div class="col-lg-6 col-md-6">
               <Fade bottom duration={1000} delay={500}>	   <div class="avt-img">
                <img src={abt1} alt="" />
              </div></Fade>
            </div>
            <div class="col-lg-6 col-md-6">
            <Fade bottom duration={1000} delay={500}>
              <div class="section-title">
                <h2 style={{color:'rgb(60, 113, 154)'}}>Who we are</h2>
                <p class="mw-100" style={{fontSize:'16px',textAlign: "justify"}}>
        The E-Prof entity was established in October 2022 by pioneers
              specialized in the field of education and they dream of
              restoring the educational process to its proper place by
              providing the correct and dignified model to the teacher,
              amending the educational relationship between the teacher and
              the student and creating a respectable educational model that
              makes it easier for the teacher to present his knowledge, the
              student to receive it, and the parents to follow up. <br />
      Therefore,
              the entity has created a digital platform, as its first step, to
              keep pace with the technological development taking place in
              education systems after the coronavirus pandemic, through which
              all elements of the educational content are presented
              (explanation videos, summaries, exercises, model exams, model
              answers) for all education stages in Egypt after it became
              necessary to make the educational process more flexible than
              before by providing learning resources at all times in an
              interactive and interesting way, for all ages, in all countries. <br /> 
      This was only possible by gathering the largest number of
              education pioneers who have built years of experience in the
              most prestigious schools of the Republic and can provide
              curricula wrapped in sound moral and educational values through
              respectable educational tools and methods consistent with the
              values of our society while upholding the value of understanding
              and real success based on the values of knowledge, work, and
              diligence.
                </p>
                {/* <a href="classes.html" title="" class="btn-default">Classes <i class="fa fa-long-arrow-alt-right"></i></a> */}
              </div></Fade>
            </div>
           
          </div>
            :<div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
              <Fade left duration={1000} delay={500}>
                <div class="section-title">
                  <h2 style={{color:'rgb(60, 113, 154)'}}>Who we are</h2>
                  <p class="mw-100" style={{fontSize:'16px',textAlign: "justify"}}>
				  The E-Prof entity was established in October 2022 by pioneers
                specialized in the field of education and they dream of
                restoring the educational process to its proper place by
                providing the correct and dignified model to the teacher,
                amending the educational relationship between the teacher and
                the student and creating a respectable educational model that
                makes it easier for the teacher to present his knowledge, the
                student to receive it, and the parents to follow up. <br />
				Therefore,
                the entity has created a digital platform, as its first step, to
                keep pace with the technological development taking place in
                education systems after the coronavirus pandemic, through which
                all elements of the educational content are presented
                (explanation videos, summaries, exercises, model exams, model
                answers) for all education stages in Egypt after it became
                necessary to make the educational process more flexible than
                before by providing learning resources at all times in an
                interactive and interesting way, for all ages, in all countries. <br /> 
				This was only possible by gathering the largest number of
                education pioneers who have built years of experience in the
                most prestigious schools of the Republic and can provide
                curricula wrapped in sound moral and educational values through
                respectable educational tools and methods consistent with the
                values of our society while upholding the value of understanding
                and real success based on the values of knowledge, work, and
                diligence.
                  </p>
                  {/* <a href="classes.html" title="" class="btn-default">Classes <i class="fa fa-long-arrow-alt-right"></i></a> */}
                </div></Fade>
              </div>
              <div class="col-lg-6 col-md-6">
              <Fade right duration={1000} delay={500}> <div class="avt-img">
                  <img src={abt1} alt="" />
                </div></Fade>
              </div>
            </div>}
		  {isMobile?
      	<div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
            <Fade right duration={1000} delay={500}>
                  <div class="section-title">
          <h2 style={{color:'rgb(60, 113, 154)'}}> Our Mission</h2>
                    <p class="mw-100" style={{fontSize:'16px',textAlign: "justify"}}>
            Our mission is to provide high-quality educational content
                      that is accessible, engaging, and tailored to the needs of
                      high school students. We aim to foster a love of learning
                      and help students achieve academic success by providing them
                      with the resources they need to excel in their studies.
                     
                    </p>
                    {/* <a href="classes.html" title="" class="btn-default">Classes <i class="fa fa-long-arrow-alt-right"></i></a> */}
                  </div></Fade>
                </div>
        <div class="col-lg-6 col-md-6">
        <Fade left duration={1000} delay={500}><div class="avt-img">
                    <img src={abt2} alt="" />
                  </div></Fade>
                </div>
              
                
              </div>
      :	<div class="row align-items-center">
			<div class="col-lg-6 col-md-6">
      <Fade left duration={1000} delay={500}> <div class="avt-img">
                  <img src={abt2} alt="" />
                </div></Fade>
              </div>
              <div class="col-lg-6 col-md-6">
              <Fade right duration={1000} delay={500}>
                 <div class="section-title">
				<h2 style={{color:'rgb(60, 113, 154)'}}> Our Mission</h2>
                  <p class="mw-100" style={{fontSize:'16px',textAlign: "justify"}}>
				  Our mission is to provide high-quality educational content
                    that is accessible, engaging, and tailored to the needs of
                    high school students. We aim to foster a love of learning
                    and help students achieve academic success by providing them
                    with the resources they need to excel in their studies.
                   
                  </p>
                  {/* <a href="classes.html" title="" class="btn-default">Classes <i class="fa fa-long-arrow-alt-right"></i></a> */}
                </div></Fade>
              </div>
              
            </div>}
		
            <div class="row align-items-center">
             
              <div class="col-lg-6 col-md-6">
              <Fade left duration={1000} delay={500}>
                <div class="act-inffo">
                  {/* <span>ABOUT US</span> */} 
				  <h2 style={{color:'rgb(60, 113, 154)', fontSize:'48.77px',fontWeight:'700'}}>Our Vision</h2>

                  <p style={{fontSize:'16px',textAlign: "justify"}}>
				  Our vision is to revolutionize the way high school students
                    learn by providing them with access to the best teachers and
                    resources. We want to create an environment where students
                    can learn at their own pace and on their own terms. Our goal
                    is to provide students with an education that is engaging,
                    interactive, and effective. We believe that every student
                    has the potential to achieve great things, and we are
                    committed to helping them unlock their full potential.
                    Through our platform, we hope to inspire a new generation of
                    learners who are passionate about education and equipped
                    with the knowledge and skills to succeed in life.
                  </p>
                  {/* <ul>
									<li>Etiam ante nisl, maximus vitae sem non, dignissim</li>
									<li>Donec blandit, sapien eu porttitor blandit</li>
									<li>Sed at urna at massa viverra feugiat non </li>
								</ul> */}
                </div></Fade>
              </div>
			  <div class="col-lg-6 col-md-6">
        <Fade right duration={1000} delay={500}>  <div class="avt-img">
                  <img src={abt1} alt="" />
                </div></Fade>
              </div>
            </div>
			
          </div>
        </div>
      </section>
  
    </>
  );
}
