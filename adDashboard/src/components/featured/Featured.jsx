import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart, Pie} from 'recharts';

const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
  
  ];

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Ration</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <PieChart width={500} height={400}>
		  <Pie data={data} dataKey="students" outerRadius={150} fill="#BE72F3" />
	  	</PieChart>
    </div>
  );
};

export default Featured;
