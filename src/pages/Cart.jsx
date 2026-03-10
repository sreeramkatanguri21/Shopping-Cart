import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])
  

  return (
    <div className="">
      {
        cart.length > 0 ? 
        (<div className="flex w-11/12 max-w-[1300px] gap-x-10 mx-auto mb-10">
          {/* left part */}
          <div className="flex flex-col w-[55%] ">
            {
              cart.map((item,index) => (
                <CartItem key={item.id} item={item} itemIndex={index}/>
              ))
            }
          </div>
          {/* right part */}
          <div className="flex flex-col justify-between w-[40%] mt-20 mb-10 h-auto gap-y-5">
            <div className="flex flex-col">
              <p className="text-green-800 text-[20px] uppercase font-semibold">Your Cart</p>
              <p className="text-green-700 text-5xl uppercase font-semibold">Summary</p>
              <p className="text-[20px] text-slate-900 font-semibold mt-5">Total Items: <span className="font-normal">{cart.length}</span></p>
            </div>
            <div>
              <p className="text-[20px] text-slate-900 font-semibold">Total Amount: <span className="font-bold text-black">${totalAmount}</span></p>
              <button className="bg-green-700 w-full py-3 border-2 border-green-600 text-white font-bold text-xl rounded-lg hover:bg-white hover:text-green-600 transition-all duration-500 mt-5">
                  Checkout Now
              </button>
            </div>
          </div>
        </div>) :
        (
          <div className="flex flex-col justify-center items-center min-h-[88vh] ">
            <h1 className="text-[20px] text-slate-900 font-semibold">Your cart is empty!</h1>
            <Link to="/">
              <button className="bg-green-600 w-full py-3 px-10 uppercase border-2 border-green-600 text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-green-600 transition-all duration-500 mt-5 ">
                  Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
