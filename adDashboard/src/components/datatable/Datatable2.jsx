import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../../api";

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "20",
    email: "3",
    age: 35,
    Oil: 20
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2",
    status: "2",
    age: 42,
    Oil:3
  }
  
];

const Datatable2 = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const getProductsFn = async () => {
    const response = await getProducts("Delhi");
    response.availableRation.forEach((item)=> item.id = item._id);
    setData(response.availableRation);
}

useEffect(() => {
  getProductsFn();
}, [])

  const actionColumn = [
    { field: "id", headerName: "ID", width: 90 },
    
    { field: "itemName", headerName: "Name", width: 200 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 120,
    },
    {
      field: "packet",
      headerName: "Packet Size",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">View</button>
            </Link>
          
          </>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products
        <Link to="/product/newproduct" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable2;
