import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/Branding book WIDE.png';
import defImage from "../images/PngItem_1503945.png";
import France from '../images/france-flag.png'
import './Navbar.css';
import wallet from '../images/wallet.png';
export default function Navbar({ ar, setAr, userData, logOut }) {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg " style={{backgroundColor:'rgba(60, 113, 154, 0.4)'}}  id="mainNAv">
      <div className="container-fluid navigation-bar">
       

        <a className="navbar-brand" style={{ width: "15%"}}
>
		<img src={logo} alt="" style={{width:'45%'}}/> 

		</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className='navbar-nav ms-auto mb-2 mb-lg-0' style={{width:'100%' ,display:'flex', justifyContent:'center', paddingRight:'8%'}}>
            {userData && (
              <>
              <li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'
                      }}>
                        <span className='footerlikeNav'>
                        <Link class="nav-link active"  to='/' title="" style={{textDecoration:'none', color:'#fff'}}>Home</Link></span></li>
							
							
								<li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}>  <span className='footerlikeNav'><Link to='/classes' class="nav-link" href="classes.html" title="" style={{textDecoration:'none', color:'#fff'}}>Classes</Link></span> 
									
								</li>
								<li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}>  <span className='footerlikeNav'><Link to='/teachers' class="nav-link" title="" style={{textDecoration:'none', color:'#fff'}}>Teachers</Link></span>
								
								</li>
                <li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'
                      }}><span className='footerlikeNav'><Link class="nav-link" to='/about' title="" style={{textDecoration:'none', color:'#fff'}}>About Us</Link></span>
									
								</li>
					
                                <li style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}><span className='footerlikeNav'><Link  class="nav-link" to='/terms' title="" style={{textDecoration:'none', color:'#fff'}}>Terms & Conditions</Link></span></li>
			<li   style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "20px",
						marginRight:'3%'

                      }}><span className='footerlikeNav'><Link  class="nav-link" to='/contact' title="" style={{textDecoration:'none', color:'#fff'}}>Contacts Us</Link></span></li>
                                <li style={{paddingLeft:'3%'}} > <div style={{ textAlign: "center"}}>
               
                    <div style={{ maxWidth: "3vw", borderRadius: "50%"}}>
                      <img style={{ borderRadius: "50%" , width:'80%' }} src={defImage} />
                    </div>                    </div>

                    </li>
                    <li >
              <div >
                    <div    onClick={() => {setAr('frc');localStorage.setItem('lang','frc')}}>  <img src={France} alt="" style={{height:'3vh'}} /></div>
                 
                    </div>
              </li>
              </>
            )}
          </ul>
        </div>
        <ul className="d-flex list-unstyled m-0">
         
          

          {userData ? (
            <>
              <li className="nav-item">
                <span className="nav-link" onClick={logOut}>
                  LogOut
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item ">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav> */}
      <nav class="navbar navbar-expand-lg " style={{ backgroundColor: 'rgba(60, 113, 154, 0.4)' }}>
        <div className="container-fluid navigation-bar" >
          <a className="navbar-brand" style={{ width: "15%" }}
          >
            <img src={logo} alt="" style={{ width: '45%' }} />

          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0' style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingRight: '8%' }}>
              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'
              }}>
                <span className='footerlikeNav'>
                  <Link class="nav-link active" to='/' title="" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link></span></li>


              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'

              }}>  <span className='footerlikeNav'><Link to='/classes' class="nav-link" href="classes.html" title="" style={{ textDecoration: 'none', color: '#fff' }}>Classes</Link></span>

              </li>
              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'

              }}>  <span className='footerlikeNav'><Link to='/teachers' class="nav-link" title="" style={{ textDecoration: 'none', color: '#fff' }}>Teachers</Link></span>
                {/* <ul>
										<li><a class="nav-link" href="teacher-single.html" title="" style={{textDecoration:'none', color:'#fff'}}>Teacher Single</a></li>
									</ul> */}
              </li>
              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'
              }}><span className='footerlikeNav'><Link class="nav-link" to='/about' title="" style={{ textDecoration: 'none', color: '#fff' }}>About Us</Link></span>

              </li>
              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'
              }}><span className='footerlikeNav'><Link class="nav-link" to='/' title="" style={{ textDecoration: 'none', color: '#fff' }}>Blogs</Link></span>

              </li>
              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'

              }}><span className='footerlikeNav'><Link class="nav-link" to='/terms' title="" style={{ textDecoration: 'none', color: '#fff' }}>Terms & Conditions</Link></span></li>
              <li style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "20px",
                marginRight: '3%'

              }}><span className='footerlikeNav'><Link class="nav-link" to='/contact' title="" style={{ textDecoration: 'none', color: '#fff' }}>Contacts Us</Link></span></li>
              <li style={{ paddingLeft: '3%' }} > <Link to='/profile' style={{ textAlign: "center" }}>

                <div style={{ maxWidth: "3vw", borderRadius: "50%" }}>
                  <img style={{ borderRadius: "50%", width: '80%' }} src={defImage} />
                </div>                    </Link>

              </li>
              <li style={{ paddingLeft: '3%' }} > <div style={{ textAlign: "center" }}>

                <div style={{ maxWidth: "3vw" }} >
                  <img style={{ width: '50%' }} src={wallet} />
                </div>                    </div>

              </li>
              <li >
                <Link to='/cart'> <i class="fa-solid fa-cart-plus"></i></Link>
              </li>
              <li style={{ padding: "16px 15px" }}>
                {" "}
                <div style={{ maxWidth: "10vw", borderRadius: "50%" }}>
                  {" "}
                  <button
                    className="btn btnHover"
                    onClick={() => {
                      window.location.replace("/registerR")
                    }}
                  >
                    LogIn
                  </button>
                </div>
              </li>
            </ul>
            <ul style={{ paddingRight: '2rem', paddingLeft: '0', marginBottom: '0px' }}>   <li >
              <div >
                <div onClick={() => { setAr('frc'); localStorage.setItem('lang', 'frc') }}>  <img src={France} alt="" style={{ height: '3vh' }} /></div>

              </div>
            </li></ul>


          </div>
        </div>
      </nav>

    </>)
}
