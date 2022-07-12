import "./chart.scss";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = ({aspect, title}) => {

  // Sample data
  const data = [
  {name: 'Delhi', students: 400},
  {name: 'Surat', students: 700},
  {name: 'Hyderabad', students: 200},
  {name: 'Mumbai', students: 1000},
  {name: 'Chennai', students: 100},
  ];
  return (
    <div className="chart">
    <div className="title">{title}</div>
    <BarChart width={600} height={400} data={data}>
      <Bar dataKey="students" fill="#52E6AF" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
    </div>
    );

  };


export default Chart;
