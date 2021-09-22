import * as React from "react";
import O2O from "./O2O";
import Driver from "./Driver";
import Marketing from "./Marketing";

interface Props {
  activeChart: string;
}
const Charts = ({ activeChart }: Props) => {
  const renderChart = (chart: string) => {
    if (chart === "O2O revenue breakdown") {
      return <O2O />;
    }
    if (chart === "Revenue drivers") {
      return <Driver />;
    }
    if (chart === "Marketing performance") {
      return <Marketing />;
    }
    return "";
  };

  return <div>{renderChart(activeChart)}</div>;
};

export default Charts;
