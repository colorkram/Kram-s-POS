import React from "react";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { DrawerContext } from "../../contexts/DrawerContext";
import { AuthContext } from "../../contexts/AuthContext";
export default function EditMenu() {
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState([]);
  const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
  const getCategory = async () => {
    // const userr = await getUserData();

    const res = await axios.get(`http://localhost:8888/category/category/`);
    // console.log(res.data);
    setShowCategory(res.data);
  };

  const [input, setInput] = useState({
    menu_name: "",
    price: 0,
    image:
      "https://res.cloudinary.com/dyhm0zdxq/image/upload/v1676345628/meal-food-icon_te7njl.webp",
    category_id: null,
  });

  useEffect(() => {
    getCategory();
  }, []);
  const handleChangleinput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const createMenu = async () => {
    try {
      const resBill = await axios.post("http://localhost:8888/menu/menu", {
        // user แนบมาให้แยู๋แล้ว
        user_id: 25,
        menu_name: input.menu_name,
        price: input.price,
        image: input.image,
        category_id: input.category_id,
      });

      await navigate("/");
      await alert("Created Done");
    } catch (err) {}
  };
  return (
    <div>
      <HomeTop kram="Codecamp's Shop" />
      <TitleBar kram="Edit Menu" />
      <br></br>
      {JSON.stringify(input)}
      <div className="w-auto flex justify-center h-auto px-[12%]">
        <img
          className=" border-8 border-black w-[300px] h-[200px]"
          src="https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg"
        ></img>
      </div>
      <br></br>
      <br></br>

      <br></br>

      <div className="flexbox m-auto grid grid-cols-1 gap-6 w-[300px] ">
        <label for="cars">Choose a Category:</label>
        <select
          name="category_id"
          value={input.category_id}
          onChange={e => handleChangleinput(e)}
        >
          <option value={0}>กรุณาเลือกหมวดหมู่</option>

          {showCategory.map(data => {
            return (
              <option value={data.category_id}>{data.category_name}</option>
            );
          })}
        </select>
        <br></br>
        <label>Menu Name</label>
        <input
          type="text"
          className="border-2 border-black flex justify-center"
          value={input.menu_name}
          name="menu_name"
          onChange={handleChangleinput}
        />
        <label>Price</label>
        <input
          type="text"
          className="border-2 border-black flex justify-center"
          value={input.price}
          name="price"
          onChange={handleChangleinput}
        />
        <br />
        <button
          type="submit"
          className="sub-but"
          onClick={createMenu}
          // style={{ borderRadius: 100 size }}
        >
          create Menu
        </button>
      </div>
    </div>
  );
}
