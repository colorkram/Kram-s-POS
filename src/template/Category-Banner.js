import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function CategoryBanner() {
  const { getUserData } = useContext(AuthContext);
  const [showCategory, setShowCategory] = useState([]);
  const [searchParams] = useSearchParams();
  // const useId = searchParams.get("use");
  // console.log(ACCESS_TOKEN.data);

  // loadDataOnlyOnce();
  // const getMe = () => axios.get("/auth/me");
  const getCategory = async () => {
    const userr = await getUserData();

    const res = await axios.get(`http://localhost:8888/category/category/`);
    // console.log(res.data);
    setShowCategory(res.data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className=" h-20 w-[100%] mt-[105px]  flex items-center justify-center fixed overflow-x-scroll overflow-y-hidden ">
      <Link to={`/home?test=`}>
        <div className="category-all h-[70px] w-[120px] rounded-full border-indigo-500/100 flex items-center justify-center m-3">
          all Menus
        </div>
      </Link>
      {/* m-24  pl-[60%] pr-[50%]*/}
      {showCategory.map(data => {
        return (
          <Link key={data.category_id} to={`/home?test=${data.category_id}`}>
            <div className="category-but h-[70px] w-[120px] rounded-full border-indigo-500/100 flex items-center justify-center m-3">
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
