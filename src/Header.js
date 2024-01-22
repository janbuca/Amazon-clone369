// import React from 'react';
// import './Header.css';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';
// import { auth } from './Firebase';

// function Header() {
// 	const [{ basket, user }, dispatch] = useStateValue();
// 	const handleAutentication = () => {
// 		if (user) {
// 			auth.signOut();
// 		}
// 	};
//   return (
//     <div className='header'>
//        <Link to="/">
// 			<img
// 				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
// 				alt=""
// 				className="header__logo"
// 			/>
// 		</Link>
//         <div className="header__search">
// 			<input type="text" className="header__searchInput" />
// 			<SearchIcon className="header__searchIcon" />
// 		</div>
//         <div className="header__nav">
				
// 			<Link to={!user && "/login"}>
// 				<div onClick={handleAutentication} className="header__option">
// 					<span className="header__optionLineOne"
// 						>Hello {!user ? "Guest" : user?.email}
// 					</span>
// 					<span className="header__optionLineTwo">
// 						{user ? "Sign Out" : "Sign In"}
// 					</span>
// 				</div>
// 			</Link>
// 			<div className="header__option">
// 				<span className="header__optionLineOne">Returns</span>
// 				<span className="header__optionLineTwo">&Orders</span>
// 			</div>
// 			<div className="header__option">
// 				<span className="header__optionLineOne">Your</span>
// 				<span className="header__optionLineTwo">Prime</span>
// 			</div>
// 			<Link to = "/Checkout" className="header__clearlink ">
// 			<div className="header__optionBasket">
// 			    <span className="header__optionLineTwo header__basketCount"> </span>
//                 <ShoppingBasketIcon />
// 					<span className="header__optionLineTwo header__basketCount">
// 						{basket.length}
// 					</span>
// 			</div>
// 			</Link>
			
// 		</div>
//     </div>
//   )
// }

// export default Header





import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useNavigate();
	const handleAutentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header__logo"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"} className="header__clearlink ">
					<div onClick={handleAutentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user?.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/orders" className="header__clearlink ">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">&Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/Checkout" className="header__clearlink ">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
