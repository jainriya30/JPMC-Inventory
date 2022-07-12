import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import {useState, useEffect} from "react";
import { getDashboard } from "../../api";
const Widget = ({ type }) => {
  let data;
  const [families, setFamilies] = useState(0);
  const [products, setProducts] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  //temporary
  // const amount = 100;
  // const diff = 20;
  
  const getDashboardFn = async () => {
    const response = await getDashboard("Delhi");
    console.log(response)
    setFamilies(response.data.families.length);
    setProducts(response.data.inventory[0].availableRation.length)
    setVolunteers(response.data.staff.length);

    
}

useEffect(() => {
  getDashboardFn();
}, [])
  switch (type) {
    case "user":
      data = {
        title: "Total Families",
        /*isMoney: false,*/
        amount: families,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Total Products",
        isMoney: false,
        amount: products,
        
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Total Volunteers",
        amount: volunteers,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
  
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
