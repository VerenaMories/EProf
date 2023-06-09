import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../Components/images/Branding book WIDE.png' ;
import './Login.css';
import Input from '@mui/material/Input';
export default function Login(props) {

  let navigate= useNavigate()
  const [errorList, setErrorList] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('');

const [user, setUser] = useState({
  email:'',
  password:''
});
// const[loaded,isLoaded]=useState({
//   loading: false
// });


function getUser(e){
let myUser={...user};
myUser [e.target.name]= e.target.value;
setUser(myUser);
//  console.log("Here")

//console.log(user)
}
async function submitLogin(e){
e.preventDefault();
setIsLoading(true);
let validationResult=validateLoginForm(user);
if (validationResult.error){
  setIsLoading(false);
setErrorList(validationResult.error.details)
}
else{
  // let {data}= axios.post(`http://192.168.1.162:3000/login`,user)
  // .then(res => {
  //   const token = res.data.token;
  //   const user = jwt(token); // decode your token here
  //   localStorage.setItem('token', token);
    // dispatch(actions.authSuccess(token, user));
  // })
//   .catch(err => {
//     dispatch(actions.loginUserFail());
// });


//  let {data}= await 
 axios.post('http://192.168.1.162:3000/login', user).then((data)=>{
   if(data.data.success){
  // console.log('data reg3et sah');
  
  
  localStorage.setItem('userToken' , data.data.admin_id);
  
  // console.log(data.data.admin_id)
  // console.log(data.message)
  
  props.getUserData();
  // console.log('hamadaa')
  navigate('/home');
  setIsLoading(false)
   }
   else{
    // console.log('false')
     setError(data.message);
     setIsLoading(false)
  
   }

  
 });



}

}

function validateLoginForm(user){
  let schema= Joi.object({
   
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{3,30}$/)).required(),
 


  });
  return schema.validate(user, {abortEarly:false});
}


  return (
    <div style={{backgroundColor:'#e1e1e2' , height:'100vh',display:'flex', alignItems:'center'}}>
{/* <h2 className='my-3'>Login Now</h2> */}
{errorList.map((error,index) =>{

if(index==4){
  return <div key={index} className='alert alert-danger'> Password required</div>
}
else{

return <div key={index} className='alert alert-danger'> {error.message}</div> 
}

  
}
 )}
{error?<div className='alert alert-danger'>{error}</div>:''}

<div className="container" >
    <div className="row" style={{display:'flex', alignItems:'center'}}>
        <div className="col-md-7" >
            <div style={{display:'flex', alignItems:'center'}}>
<img src={logo} alt="" style={{width:'60%'}} /></div>
        </div>
        <div className="col-md-5 login" >
        <form className='py-4' onSubmit={submitLogin}>

<div className="row p-3">
<label htmlFor="email"> <h4>Email:</h4>  </label>
<Input type="email" onChange={getUser} id='email' className=' my-3' name='email' /></div>
<div className="row p-3">


<label htmlFor="password"> <h4>Password:</h4>  </label>
<Input type="password" onChange={getUser} id='password' className=' my-3' name='password' /></div>
<button  type='submit' className='btn btn-outline-info'>{isLoading? <i className='fas fa-spinner fa-spin'></i>:"Login"}    </button>
      </form>


        </div>
    </div>
</div>

     
    
    </div>
  )
}
