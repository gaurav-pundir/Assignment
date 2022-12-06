import './App.css';
import { BarChart } from 'recharts';
import { CartesianGrid } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';
import { Bar } from 'recharts';
import { useEffect, useState } from 'react';

function App() {
  const [dashboardData, setDashboardData] = useState([])
  const getDashboardData = async () => {
    try {
      const res = await fetch(`localhost:5000/dashboard?p_user_id=${101386}`).then((res) => res.json());
      console.log(res);
      setDashboardData(res);
    }

    catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {

    getDashboardData();

  }, []);
  return (
    <div className='App'>
      <BarChart width={1000} height={500} data={dashboardData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="General Info" fill="#18375F" />
        <Bar dataKey="Follow-up Info" fill="#376DBA" />
        <Bar dataKey="Reporter Info" fill="#27518B" />
        <Bar dataKey="Case Death info" fill="#18375F" />
        <Bar dataKey="Case Neonates Info" fill="#27518B" />
        <Bar dataKey="Patient History Info" fill="#376DBA" />
        <Bar dataKey="Patient Lab Data Info" fill="#18375F" />
        <Bar dataKey="Product Info" fill="#27518B" />
        <Bar dataKey="Product Indication Info" fill="#18375F" />
        <Bar dataKey="Product Dose Info" fill="#27518B" />
        <Bar dataKey="Event Info" fill="#376DBA" />
        <Bar dataKey="Analysis Info" fill="#27518B" />
        <Bar dataKey="Submission Info" fill="#18375F" />
      </BarChart>
    </div>
  );
}

export default App;
