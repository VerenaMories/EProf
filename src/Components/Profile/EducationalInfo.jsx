import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, Form, ProgressBar, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import defImage from "../images/PngItem_1503945.png";
import "./style.css";
import swal from 'sweetalert';

export default function EducationalInfo() {
    const [studyYear, setstudyYear] = useState("");

    const [user, setUser] = useState({});
    const [diploma, setDiploma] = useState([]);
    const [selectedIdDiploma, setSelectedIdDiploma] = useState([]);
    const [formData, setFormData] = useState({
      studyYear: '',diploma:''
    });
  
    const [number, setNumber] = useState("");
    const [profile, setprofile] = useState({});
    useEffect(() => {
 
        axios
          .get(`https://eprof-zu1o.onrender.com/admin/allDiploma`)
          .then((response) => {
            setSelectedIdDiploma(response.data.diploma);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      
    }, []);
    useEffect(() => {
      const diploma =sessionStorage.getItem("diploma")
 
        axios
          .get(`https://eprof-zu1o.onrender.com/admin/diploma/${diploma}`)
          .then((response) => {
            setDiploma(response.data);
            // console.log(response.data);
          })
          .catch((error) => {
            // console.log(error);
          });
      
    }, []);
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
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          studyYear: formData.studyYear,
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
  return (
    <>
    <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      {/* <Form.Label>First Name</Form.Label> */}
                      {profile.studyYear && (

<select
className="form__field"
id="studyYear"
name="studyYear"
style={{width:'250px'}}
value={formData.studyYear}
onChange={(e) => setFormData({ ...formData, diploma: e.target.value })}
// onChange={(e) => {
//   setstudyYear(e.target.value);
// }}
>
<option value="">{profile.studyYear.diploma ? profile.studyYear.diploma.name : ''}</option>
{selectedIdDiploma.map((x) => (
  <option key={x._id} value={x._id}>
    {x.name}
  </option>
))}
</select>
//                          <div class="form__group field">
//                                    <input
//               className="form__field"
//               style={{width:'250px'}}
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={profile.studyYear.diploma ? profile.studyYear.diploma.name : ''}
//  onChange={(e) => {
//    setstudyYear(e.target.value);
//  }}

//               autoComplete="off"
//             />
//              <div className="iconWrap2" style={{left:'10px'}}>
//              <i class="fa-solid fa-user-graduate"></i>
//                   </div>
            
// </div>
)}
                    </Form.Group>  
                      </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      {/* <Form.Label>Last Name</Form.Label> */}
                      <select
  className="form__field"
  id="studyYear"
  name="studyYear"
  style={{width:'250px'}}
  value={formData.studyYear}
  onChange={(e) => setFormData({ ...formData, studyYear: e.target.value })}
>
  <option value="">{profile.studyYear?profile.studyYear.name:''}</option>
  {diploma.map((x) => (
    <option key={x._id} value={x._id}>
      {x.name}
    </option>
  ))}
</select>
                    </Form.Group>
                  </Row>
                 

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    {/* <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows={4} /> */}
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
                    // onClick={(e) => {
                    //   handleEdit(e);
                    // }}
                    // disabled={
                    //   name.first + " " + name.last === user.name &&
                    //   number === user.number
                    //     ? true
                    //     : false
                    // }
                  >
                    Submit Changes<i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Form>
   </>
 )
}
