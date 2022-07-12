import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable2 from "../../components/datatable/Datatable2"

export default function ProductList() {
  
  return (
    <div className="productList">
       <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable2/>
      </div>
    </div>
  );
}
