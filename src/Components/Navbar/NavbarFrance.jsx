import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/Branding book WIDE.png';
import defImage from "../images/PngItem_1503945.png";
import uk from '../images/ukFlag.png';

export default function NavbarFrance({ar, setAr}) {
  return (
<>
<nav  class="navbar navbar-expand-lg " style={{backgroundColor:'rgba(60, 113, 154, 0.4)'}}>
	<div className="container-fluid navigation-bar" >
		<a className="navbar-brand" style={{ width: "19%", paddingLeft: "1%" }}
>
		<img src={logo} alt="" style={{width:'90%'}}/> 

		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	<ul className='navbar-nav ms-auto mb-2 mb-lg-0' style={{width:'100%' ,display:'flex', justifyContent:'center'}}>
								<li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'
                      }}><Link class="nav-link activ"  to='/' title="" style={{textDecoration:'none', color:'#fff'}}>Home</Link></li>
							
							
								<li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}><a class="nav-link" href="classes.html" title="" style={{textDecoration:'none', color:'#fff'}}>Classes</a>
									{/* <ul>
										<li><a class="nav-link" href="class-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Class Single</a></li>
									</ul> */}
								</li>
								<li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}><Link to='/teachers' class="nav-link" title="" style={{textDecoration:'none', color:'#fff'}}>Teachers</Link>
									{/* <ul>
										<li><a class="nav-link" href="teacher-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Teacher Single</a></li>
									</ul> */}
								</li>
                <li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'
                      }}><Link class="nav-link" to='/about' title="" style={{textDecoration:'none', color:'#fff'}}>About</Link>
									
								</li>
					
                                <li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}><Link  class="nav-link" to='/terms' title="" style={{textDecoration:'none', color:'#fff'}}>Terms & Conditions</Link></li>
			<li   style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}><Link  class="nav-link" to='/contact' title="" style={{textDecoration:'none', color:'#fff'}}>Contacts</Link></li>
                                <li > <div style={{ textAlign: "center"}}>
               
                    <div style={{ maxWidth: "2vw", borderRadius: "50%" }}>
                      <img style={{ borderRadius: "50%" , width:'90%' }} src={defImage} />
                    </div>                    </div>

                    </li>
                    <li className="nav-item">
              <div className="dropdown">
                    <div className="dropbtn btn"   onClick={() => {setAr('eng');localStorage.setItem('lang','eng')}}>  <img src={uk} alt="" style={{height:'3vh'}} /></div>
                 
                    </div>
              </li>
							</ul>
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li >
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li >
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
         
        </li>
       
      </ul> */}
      
    </div>
	</div>
</nav>
{/* <div className="wrapper">

<header style={{backgroundColor:'rgba(60, 113, 154, 0.4)'}}>
				<div class="container-fluid">
					<div class="header-content d-flex flex-wrap align-items-center">
						<div class="logo">
							<a title="">
								<img src={logo} alt="" style={{width:'30%'}}/> 
							</a>
						</div>
					<div className='navigation-bar d-flex flex-wrap align-items-center' >
                        
                    <nav >
							<ul>
								<li><Link class="active" to='/' title="" style={{textDecoration:'none', color:'#fff'}}>Home</Link></li>
								<li><Link  to='/about' title="" style={{textDecoration:'none', color:'#fff'}}>About</Link>
									
								</li>
								<li><a href="classes.html" title="" style={{textDecoration:'none', color:'#fff'}}>Classes</a>
									<ul>
										<li><a href="class-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Class Single</a></li>
									</ul>
								</li>
								<li><Link to='/teachers' title="" style={{textDecoration:'none', color:'#fff'}}>Teachers</Link>
									<ul>
										<li><a href="teacher-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Teacher Single</a></li>
									</ul>
								</li>
								
								<li><Link to='/contact' title="" style={{textDecoration:'none', color:'#fff'}}>Contacts</Link></li>
                                <li><Link to='/terms' title="" style={{textDecoration:'none', color:'#fff'}}>Terms & Conditions</Link></li>

                                <li> <div style={{ textAlign: "center"}}>
               
                    <div style={{ maxWidth: "2vw", borderRadius: "50%" }}>
                      <img style={{ borderRadius: "50%" , width:'90%' }} src={defImage} />
                    </div>                    </div>

                    </li>
							</ul>
						</nav>
                    </div>
                    <button

className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbar"
aria-controls="navbar"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>
</button>
		
					</div>
				
				</div>
			</header>

		

</div> */}
</>  )
}
