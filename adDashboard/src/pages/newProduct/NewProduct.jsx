import "./newProduct.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {useState, useEffect} from "react";
import { addProducts } from "../../api";

export default function NewProduct() {

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [file, setFile] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      items: [
        {
          itemName,
          quantity: parseInt(quantity)
        }
      ]
    }
    console.log(data);
    const response = await addProducts("Delhi", data);
    console.log(response);

  }
  return (
    <div className="new">
      <Sidebar />
    <div className="newProduct">
      <Navbar />
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>File</label>
          <input type="file" id="file" name="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" name="itemName" placeholder="Oil, Sugar, etc" onChange={(e) => setItemName(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Quantity (in kgs or litres)</label>
          <input type="text" placeholder="123" name="quantity"  onChange={(e) => setQuantity(e.target.value)}/>
        </div>
       
        <button className="addProductButton" type="submit">Create</button>
      </form>
    </div>
    </div>
  );
}
