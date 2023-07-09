import React,{useEffect,useState} from 'react';
import './Cart.css';
import thumb1 from '../images/thumb1.jpg';
import thumb2 from '../images/thumb2.jpg';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import Fade from 'react-reveal/Fade';

export default function Cart( ) {

	const [cart, setCart] = useState([]);
	const [profile, setProfile] = useState({});
	const [totalPrice, setTotalPrice] = useState(0);
	const [total, setTotal] = useState('');
	const sendData = () => {
		const token = sessionStorage.getItem('token');
	  
		axios
		  .put('https://eprof-zu1o.onrender.com/user/updateCart', {cart}, {
			headers: {
			  'Authorization': token
			}
		  })
		  .then(() => {
			axios.post('https://eprof-zu1o.onrender.com/user/buySheet', {}, {
			  headers: {
				'Authorization': token
			  }
			})
			  .then(response => {
				// console.log(response.data);
				swal({
				  title: 'Good job!',
				  text: 'Success!',
				  icon: 'success',
				}).then(() => {
				  window.location.reload(); // Reload the page
				});
			  })
			  .catch(error => {
				// console.log(error);
				swal("Oops!", "Please try again!", "error");
			  });
		  })
		  .catch(error => {
			// console.log(error);
			swal("Oops!", "Please try again!", "error");
		  });
	  };
	  

	const updateQuantity = (index, updatedQuantity) => {
		const updatedCart = [...cart];
		updatedCart[index].quantity = updatedQuantity;
		setCart(updatedCart);
		const itemPrice = updatedCart[index].sheet.price;
		const newTotalPrice =
		  totalPrice + (updatedQuantity - updatedCart[index].quantity) * itemPrice;
		setTotalPrice(newTotalPrice);
	  };
	
	  let { _id } = useParams();
	
	  useEffect(() => {
		const token = sessionStorage.getItem("token");
		// console.log("here");
		axios
		  .get("https://eprof-zu1o.onrender.com/user/me", {
			headers: {
			  Authorization: ` ${token}`,
			},
		  })
		  .then((response) => {
			setTotal(response.data.user.myCart);
			// console.log(response.data.user);

			// console.log(response.data.user.myCart.sheets);
			setProfile(response.data.user.myCart.sheets);
			setCart(response.data.user.myCart.sheets);
			let newTotalPrice = 0;
			response.data.user.myCart.sheets.forEach((item) => {
			  newTotalPrice += item.sheet.price * item.quantity;
			});
			setTotalPrice(newTotalPrice);
		  })
		  .catch((error) => {
			// console.log(error);
		  });
	  }, []);
	
	  async function getCart(event,item, updatedQuantity) {
		event.preventDefault();
		// const quantity = parseInt(updatedQuantity, 10);
		// if (isNaN(quantity)) {
		//   console.log(quantity);
		//   return;
		// }
		// console.log("updatedQuantity:", updatedQuantity);
		// const quantity = parseInt(updatedQuantity, 10);
		// if (!updatedQuantity) {
		// 	console.log('Quantity is undefined');
		// 	return;
		//   }
		const token = sessionStorage.getItem("token");
		const updatedCart = profile.map((cartItem) => {
		  if (cartItem._id === item._id) {
			return { ...cartItem, quantity: updatedQuantity };
		  }
		  return cartItem;
		});
	
		let { data } = await axios.patch(
		  "https://eprof-zu1o.onrender.com/user/editSheet/" + _id,
		  { quantity: updatedQuantity },
		  {
			headers: {
			  Authorization: ` ${token}`,
			},
		  }
		);
		// console.log(data);

		setCart(data);
		let newTotalPrice = 0;
		updatedCart.forEach((item) => {
		  newTotalPrice += item.sheet.price * item.quantity;
		});
		setTotalPrice(newTotalPrice);
		// console.log(data);
		window.location.reload();

	  }
	
	  useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
	  const deleteCartItem = (index,itemId) => {
		const token = sessionStorage.getItem("token");

		const updatedCart = [...cart];
		updatedCart.splice(index, 1); // Remove the item at the specified index
		setCart(updatedCart); // Update the cart state with the modified array
	  
		axios.delete(`https://eprof-zu1o.onrender.com/user/removeFromCart/`+itemId,
		{
			headers: {
			  Authorization: `${token}`,
			}})
		  .then(response => {
			// Handle success if needed
		// console.log('deleted')  
		})
		  .catch(error => {
			// Handle error if needed
			// console.log(error.response.data)  

			// console.log('msh shghal  y mwlana')  

		  });
	  };
	  
  return (
<>
<section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
		  <Fade top duration={1000} delay={500}>	 <h2>My Cart</h2></Fade>
            <ul>
              <li>
			  <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link>
              </li>
              <li>
                <span>My Cart</span>
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
<section class="page-banner-section">
			<div class="container">
			
			</div>
		</section>
		<section class="cart-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-sm-12">
        <div class="cart-box">
          <table class="shop_table table-responsive">
            <thead>
              <tr>
                <th class="product-thumbnail">&nbsp;</th>
				<th class="product-action">Delete</th> 
                <th class="product-name">Product</th>
                <th class="product-price">Price</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-subtotal">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 && cart.map((item, index) => (
                <tr key={item._id}>
				<td class="product-thumbnail">&nbsp;</td>

                  <td> <button
            type="button"
            style={{
              display: "inline-block",
              color: "#000",
              fontSize: "16.29px",
              fontWeight: "500",
             
            backgroundColor:'transparent',
              lineHeight: "40px",
             
              position: "relative",
           
              transition: "all 0.4s ease-in-out",
           
            }}
            onClick={() => deleteCartItem(index,item.sheet._id)}
          >
            X
          </button></td>
                  
                  <td class="product-name">
                    <a href="/" style={{ textDecoration: 'none', color: '#000' }}>{item.sheet.name}</a>
                  </td>
                  <td class="product-price">
                    {item.sheet.price}
                  </td>
                  <td class="product-quantity">
				  <input
  type="number"
  value={item.quantity}
  min={0}
  max={item.sheet.stock}
  onChange={(event) => {
    let newQuantity = parseInt(event.target.value);
    if (newQuantity < 0) {
      newQuantity = 0;
    } else if (newQuantity > item.sheet.stock) {
      newQuantity = item.sheet.stock;
    }
    updateQuantity(index, newQuantity);
}}
  
  disabled={false}
/>

                  </td>
                  <td class="product-subtotal">{item.sheet.price * item.quantity} EGP</td>
				  <td colspan="6" class="actions">
                  {/* <button type="submit" style={{display: "inline-block",
    color: "#fff",
    fontSize: "18.29px",
    fontWeight: "500",
    backgroundColor:" #3c719a",
    height: "40px",
    lineHeight: "40px",
	padding:'0 20px',
    position:" relative",
    borderRadius:" 30px",
    transition: "all 0.4s ease-in-out"}}  
	//  onClick={() => getCart(item, item.quantity)}
>Update cart</button> */}
                </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12" >
			 <div class="sidebar">
          <div class="widget cart-widget" style={{backgroundColor:'transparent',border:'none'}}>
            
            <table>
              <tbody>
                
              
              </tbody>
            </table>
            <a onClick={sendData} class="checkout-button" style={{ textDecoration: 'none' }}>Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>  )
}
