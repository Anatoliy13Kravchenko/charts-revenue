import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { genData, options } from "./config";

const Marketing = () => {
  const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);

    return () => clearInterval(interval);
  }, []);

  return <Bar data={data} options={options} />;
};

export default Marketing;
