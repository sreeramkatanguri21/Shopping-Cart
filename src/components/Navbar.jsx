import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className="bg-slate-900 w-full h-[12vh]">
      <div className="flex justify-between w-11/12 max-w-[1200px] mx-auto items-center ">
        <NavLink to="/">
          <div className="my-3">
            <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="" 
            width={170} height={50}/>
          </div>
        </NavLink>
        <div className="flex gap-6 items-center">
          <NavLink to="/">
            <p className="text-white">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <div className="text-white">
                <FaShoppingCart  fontSize={24}/>
              </div>
              <div className=" flex justify-center items-center absolute -top-1 -right-2 animate-bounce">
                {
                  cart.length > 0 &&
                  <div className="text-white text-[12px] w-5 h-5 bg-green-600 rounded-full text-center">{cart.length}</div>
                }
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
