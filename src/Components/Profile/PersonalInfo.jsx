import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, Form, ProgressBar, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import defImage from "../images/PngItem_1503945.png";
import "./style.css";
import swal from 'sweetalert';

export default function PersonalInfo() {
    const [name, setName] = useState("");   
     const [parent, setParent] = useState("");

    const [user, setUser] = useState({});
    const [parentPhone, setparentPhone] = useState("");
    const [profile, setprofile] = useState({});
    const [Governorate, setGovernorate] = useState([]);
    const [Area, setArea] = useState([]);
    const [selectedGovernorateId, setSelectedGovernorateId] = useState(null);

   
    useEffect(() => {
      axios
        .get("https://eprof-zu1o.onrender.com/admin/allGovernorate")
        .then((response) => {
          setGovernorate(response.data.governorate);
          // console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
    }, []);
    const handleGovernorateChange = (e) => {
      const selectedId = e.target.value;
      setSelectedGovernorateId(selectedId);
      axios
        .get(`https://eprof-zu1o.onrender.com/admin/governorate/${selectedId}`)
        .then((response) => {
          setArea(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          // console.log(error);
        });
    };
    useEffect(() => {
        const token = sessionStorage.getItem('token'); // retrieve token value from session storage
    axios.get('https://eprof-zu1o.onrender.com/user/me', {
      headers: {
        'Authorization': ` ${token}` // set Authorization header with token value
      }
    })
    .then(response => {
      // console.log(response.data);
      setprofile(response.data.user)
    })
    .catch(error => {
      // console.log(error);
    });
     
      }, []);
      const [formData, setFormData] = useState({
     
        area: "",
        governorate: "",
       
      });
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          parent,
          governorate: formData.governorate,
          area: formData.area,
          parentPhone
        };
        sendData(data);
      };
      
        const sendData = (data) => {
          const token = sessionStorage.getItem("token");
    
          axios.patch('https://eprof-zu1o.onrender.com/user/update', data, {
            headers: {
              Authorization: ` ${token}`,
            },
          })
            .then(response => {
            // console.log(response.data);
            swal("Good job!", "Your Data has been sent successfully!", "success");
            })
            .catch(error => {
            // console.log(error);			
            swal("Oops!", "Please try again!", "error");
      
            });
          }
          const birthDate = new Date(profile.birthDate).toLocaleDateString();

  return (
    <>
    <Form method="post" onSubmit={handleSubmit} >
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridEmail"> */}
                    <div class="form__group field">
                    <input
              className="form__field"
              style={{width:'250px'}}
              type="text"
              id="firstName"
              name="firstName"
              disabled
                        placeholder="Gender"
                        value={profile.gender}
            />
             <div className="iconWrap2" style={{left:'7px'}}>
             <i className="fa-solid fa-venus-mars"></i>
                  </div>
                  {/* <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("firstName").focus();
                    }}
                  >
                 {profile.gender}
                  </label> */}
                    
                      </div>
                    {/* </Form.Group>    */}
                     </Row>
                    <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridPassword"> */}
                    <div class="form__group field">
                    <input
              className="form__field"
              style={{width:'250px'}}
              type="text"
              id="lastName"
              name="lastName"
              disabled
              placeholder="Birth Date"
              value={birthDate}
            />
                 <div className="iconWrap2" style={{left:'10px'}}>
                 <i class="fa-solid fa-calendar-days"></i>
                  </div>
                      {/* <Form.Control
                        type="text"
                        disabled
                        placeholder="Birth Date"
                        value={profile.birthDate}
                      
                      /> */}
                      </div>
                    {/* </Form.Group> */}
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                    <div class="form__group field">
 <select className="form__field"    style={{width:'250px'}} id="governorate" name="governorate" onChange={handleGovernorateChange}>
 <option value="">{profile.area?profile.area.governorate.name:''}</option>
 {Governorate.map((x) => (
   <option key={x._id} value={x._id}>
     {x.name}
   </option>
 ))}
</select>    <div className="iconWrap2" style={{left:'-6px'}}>
            <i class="fa-solid fa-layer-group"></i>
                  </div></div>

                  
                    </Form.Group>
                     </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                    <div class="form__group field">
    <select
    className="form__field"
    style={{width:'250px'}}
 name="area"
 id="area"
 value={formData.area}
 onChange={(e) =>
   setFormData({ ...formData, area: e.target.value })
 }
>
 <option value="">{profile.area?profile.area.name:''}</option>
 {Area.map((x) => (
   <option key={x._id} value={x._id}>
     {x.name}
   </option>
 ))}
</select>
<div className="iconWrap2" style={{left:'-6px'}}>
            <i class="fa-solid fa-layer-group"></i>
                  </div>
                   </div>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridAddress1"> */}
                    <div class="form__group field">
                    <input
              className="form__field"
              style={{width:'250px'}}
              type="text"
              id="lastName"
              name="lastName"
              placeholder={profile.parent}
              value={parent}
              onChange={(e) => {
                setParent( e.target.value );
              }}
            />
             <div className="iconWrap2" style={{left:'10px'}}>
             <i class="fa-solid fa-user-group"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("lastName").focus();
                    }}
                  >
            {profile.parent}
                  </label>
                   </div>
                   
                    {/* </Form.Group> */}
                  </Row>
                  <Row className="mb-3">
                    {/* <Form.Group as={Col} controlId="formGridAddress1"> */}
                    <div class="form__group field">
                    <input
              className="form__field"
              style={{width:'250px'}}
              type="text"
              id="lastName"
              name="lastName"
              placeholder={profile.parentPhone }
    value={parentPhone }
    onChange={(e) => {
    setparentPhone( e.target.value );
    }}
              autoComplete="off"
            />
             <div className="iconWrap2" style={{left:'10px'}}>
             <i class="fa-solid fa-phone"></i>
                  </div>
                  <label
                    for="name"
                    class="form__label2"
                    onClick={() => {
                      document.getElementById("lastName").focus();
                    }}
                  >
         {profile.parentPhone }
                  </label>
  
</div>
                   
                    {/* </Form.Group> */}
                  </Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                
                  </Form.Group>
                  <button
                    class="btn btn-primary btnHover"
                    style={{
                      marginTop: "13px",
                      marginBottom: "13px",                      padding: "18px 32px 18px 32px",
                      border: "#3c719a 1px solid",
                      borderRadius: "50px",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                    type="submit" id="submit" 
               
                  >
                    Submit Changes<i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Form>
   </>
 )
}
