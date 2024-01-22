// import "./App.css";
// import Header from "./Header";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import { useStateValue } from "./StateProvider";
// import React, { useEffect } from "react";
// import { auth } from "./Firebase";
// import Payment from "./Payment";
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// function App() {
//   const [{user}, dispatch] = useStateValue();
// 	useEffect(() => {
// 		auth.onAuthStateChanged((authUser) => {
// 			if (authUser) {
// 				dispatch({
// 					type: "SET_USER",
// 					user: authUser,
// 				});
// 			} else {
// 				dispatch({
// 					type: "SET_USER",
// 					user: null,
// 				});
// 			}
// 		});
// 	}, []);
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="Login" element = {<Login />}/>
//           <Route path="/" element = {<> <Header /> <Home /> </>}/>
//           <Route path="/Checkout" element = {<> <Header /> <Checkout /> </>}/>
// 		  <Route  path="/Payment" element = {<> <Header/> <Payment /> </>} />
//         </Routes>
        
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./Orders";
const promise = loadStripe(
	'pk_test_51OaobqAdovUNpYR04AiX511NdON9sqUPz3Bya9glUAIL8BrIWr2zgSkDMKYSHeMcCyvIQ0rAfZqTKhpqEM7VfjM30075BZdoiN'
);
function App() {
	const [{user}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="Login" element = {<Login />}/>
					<Route path="/" element = {<> <Header /> <Home /> </>}/>
					<Route path="/Checkout" element = {<> <Header /> <Checkout /> </>}/>
					<Route  path="/Payment" element = {<> <Header/>
						<Elements stripe={promise}>
							<Payment />
						</Elements> </>} />
					<Route  path="/orders" element = {<> <Header/> <Orders /> </>} />

				</Routes>				
			</div>
		</Router>
	);
}

export default App;

