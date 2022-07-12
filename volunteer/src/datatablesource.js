export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Patients Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Rice",
    width: 230,
  },

  {
    field: "age",
    headerName: "Wheat",
    width: 100,
  },
  {
    field: "status",
    headerName: "Dal",
    width: 160,
    
    },
    {
      field: "Oil",
      headerName: "Oil",
      width: 160,
      
      },
    
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "2",
    email: "3",
    age: 35,
    Oil: 2
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
