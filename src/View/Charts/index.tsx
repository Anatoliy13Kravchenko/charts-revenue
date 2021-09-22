import * as React from "react";
import O2O from "./O2O";

interface Props {
  activeChart: string;
}
const Charts = ({ activeChart }: Props) => {
  const renderChart = (chart: string) => {
    if (chart === "O2O revenue breakdown") {
      return <O2O />;
    }
    return "";
  };

  return <div>{renderChart(activeChart)}</div>;
};

export default Charts;
