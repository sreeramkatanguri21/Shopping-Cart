import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart!");
  }
  return (
    <div className={`flex justify-between mt-12 gap-x-12 pt-5 ${itemIndex>0 && "border-t-2 border-slate-500"}`}>
      <div className="w-[30%] flex items-center">
        <img src={item.image} alt="" 
        className="object-contain"/>
      </div>
      <div className="flex flex-col w-[70%]">
        <p className="text-slate-700 font-semibold text-[20px]">{item.title}</p>
        <p className="mt-3 text-slate-500">{item.description.substr(0,85) + "..."}</p>
        <div className="flex justify-between mt-7">
          <p className="text-green-600 font-semibold text-[20px]">${item.price}</p>
          <div onClick={removeFromCart} className="mr-10 px-3 py-3 bg-red-200 hover:bg-red-400 transition-all duration-200 rounded-full flex justify-center items-center group cursor-pointer">
            <MdDelete className="text-red-800 group-hover:text-white transition-all duration-200"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
