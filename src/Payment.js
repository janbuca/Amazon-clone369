// import React from "react";
// import "./Payment.css";
// import { useStateValue } from "./StateProvider";
// import { Link } from "react-router-dom";
// import CheckoutProduct from "./CheckoutProduct";

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();

//   return (
//    <div className="payment">
//      <div className="payment__container">
//       <h1>
//         Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//       </h1>
//       <div className="payment__section">
//         <div className="payment__title">
//           <h3>Delivery Address</h3>
//         </div>
//         <div className="payment__address">
//           <p>{user?.email}</p>
//           <p>123 React Lane</p>
//           <p>Chicago, IL</p>
//         </div>
//       </div>
//       <div className="payment__section">
//         <div className="payment__title">
//           <h3>Review items and delivery</h3>
//         </div>
//         <div className="payment__items">
//           {basket.map((item) => (
//             <CheckoutProduct
//               id={item.id}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="payment__section">
//         <div className="payment__title">
//           <h3>Payment Method</h3>
//         </div>
//       </div>
//     </div>
//    </div>
//   );
// }

// export default Payment;



import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from './axios';
import { db } from "./firebase";
const Payment = () => {
	const navigate = useNavigate();
    // const history = useHistory();
	const [{ basket, user }, dispatch] = useStateValue();
	const getBasketTotal = (basket) =>
		basket.reduce((amount, item) => item.price + amount, 0);
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
    }, [basket]);
    console.log('secret', clientSecret);
	const handleSubmit = async (e) => {
		e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent=payment confirmation
			db.collection('users')
				.doc(user?.uid)
				.collection('orders')
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created
				});
			
            setSucceeded(true);
            setError(null);
			setProcessing(false);
			dispatch({
				type: 'EMPTY_BASKET'
			});
			navigate('./Orders.js');
            // history.replace('/orders');
        })
	};
	const handleChange = (e) => {
		console.log(e);
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Chicago, IL</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total:{value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
