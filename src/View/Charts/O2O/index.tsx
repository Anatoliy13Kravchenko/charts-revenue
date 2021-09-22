import * as React from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "./config.ts";

const O2O = () => {
  return <Bar data={data} options={options} />;
};

export default O2O;
