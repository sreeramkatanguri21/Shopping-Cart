import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error) {
      console.log("Error in fetch data");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[])

  return (
    <div className="w-full h-full my-14">
      {
        loading ?
        (
          <div className="flex justify-center items-center h-[500px]">
            <Spinner/>
          </div>
        ):
        (
          posts.length===0 ?
          (<div className="flex justify-center items-center h-[500px] text-xl">No Data Found</div>) :
          (
            <div className="w-11/12 max-w-[1200px] mx-auto h-auto flex flex-wrap gap-x-5 gap-y-10">
              {
                posts.map((post) => (
                  <Product key={post.id} post={post}/>
                ))
              }
            </div>
          )
        )
      }
    </div>
  );
};

export default Home;
