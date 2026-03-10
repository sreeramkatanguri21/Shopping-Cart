import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  return (
    <div className="w-[260px] border py-5 pb-3 flex flex-col rounded-xl product">
      <div>
          <p className="text-slate-900 text-lg font-semibold text-center">{post.title.substr(0,15)}...</p>
      </div>
      <div className="w-40 mx-auto my-4">
        <p className="text-[10px] text-slate-400">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="flex justify-center mb-10 h-[180px]">
        <img src={post.image} alt="" 
        className="w-full h-full object-contain"/>
      </div>
      <div className="flex justify-between mx-4">
        <p className="text-green-600 font-semibold">${post.price}</p>
        <div>
          {
            cart.some((item) => item.id === post.id) ?
            (
              <button className="border-2 border-slate-700 rounded-2xl px-3 uppercase text-[12px] font-semibold py-1 text-slate-700 hover:text-white hover:bg-slate-700 transition-all duration-200"
              onClick={removeFromCart}>
                Remove Item 
              </button>
            ) :
            (
              <button className="border-2 border-slate-700 rounded-2xl px-3 uppercase text-[12px] font-semibold py-1 text-slate-700 hover:text-white hover:bg-slate-700 transition-all duration-200"
              onClick={addToCart}>
                Add to Cart
              </button>
            )
          }
        </div>
      </div>
      
    </div>
  );
};

export default Product;
