import React from "react";
import HomeTop from "../../template/Home-top";
import TitleBar from "../../template/TitleBar";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function EditMenu() {
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState([]);

  const getCategory = async () => {
    // const userr = await getUserData();

    const res = await axios.get(`http://localhost:8888/category/category/`);
    // console.log(res.data);
    setShowCategory(res.data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  const createMenu = async () => {
    const [input, setInput] = useState({
      menu_name: "",
      price: "",
      image: "",
      category_id: "",
    });
    const handleChangleinput = e => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    try {
      const resBill = await axios.post("http://localhost:8888/menu/menu", {
        // user แนบมาให้แยู๋แล้ว
        menu_name: input.menu_name,
        price: input.price,
        image: input.image,
        category_id: input.category_id,
      });

      await navigate(`"/"}`);
    } catch (err) {}
  };
  return (
    <div>
      <HomeTop kram="Codecamp's Shop" />
      <TitleBar kram="Edit Menu" />
      <br></br>
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
        <select name="category_name" id="">
          {showCategory.map(data => {
            return <option value="volvo">{data.category_name}</option>;
          })}
        </select>
        <br></br>
        <label>Menu Name</label>
        <input className="border-2 border-black flex justify-center" />
        <label>Price</label>
        <input className="border-2 border-black flex justify-center" />
        <br />
        <button
          type="submit"
          className="sub-but"
          // style={{ borderRadius: 100 size }}
        >
          login
        </button>
      </div>
    </div>
  );
}
