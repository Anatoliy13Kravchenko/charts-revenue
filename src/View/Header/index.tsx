import * as React from "react";
import "./index.css";

interface Props {
  activeChart: string;
  setActiveChart: (chart: string) => void;
}

const Header = ({ activeChart, setActiveChart }: Props) => {
  const chartList = [
    "Revenue drivers",
    "O2O revenue breakdown",
    "Marketing performance"
  ];

  const renderNavItems = (items: string[]) => {
    return items.map((item, i) => {
      return (
        <div
          key={i}
          onClick={() => setActiveChart(item)}
          className={`nav-item${activeChart === item ? " active" : ""}`}
        >
          {item}
        </div>
      );
    });
  };

  return <div className={"nav-container"}>{renderNavItems(chartList)}</div>;
};

export default Header;
