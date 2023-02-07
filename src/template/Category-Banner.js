import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryBanner() {
  const [showCategory, setShowCategory] = useState([]);

  // loadDataOnlyOnce();
  // const getMe = () => axios.get("/auth/me");
  const getMe = async () => {
    const res = await axios.get("http://localhost:8888/category/category/1");
    // console.log(res.data);
    setShowCategory(res.data);
  };
  useEffect(() => {
    getMe();
  }, [showCategory]);
  return (
    <div className=" h-20 w-100 mt-24 flex items-center justify-center fixed overflow-x-auto">
      {showCategory.map(data => {
        return (
          <Link key={data.category_id} to={`/home?test=${data.category_id}`}>
            <div className="category-but h-[70px] w-[120px] rounded-full border-indigo-500/100 flex items-center justify-center m-1">
              {/* h-12 w-24  */}
              {data.category_name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryBanner;
