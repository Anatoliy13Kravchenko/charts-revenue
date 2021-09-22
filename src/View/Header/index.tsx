import * as React from "react";
import "./index.css";
import { chartList } from "../Charts/chartList";

interface Props {
  activeChart: string;
  setActiveChart: (chart: string) => void;
}

const Header = ({ activeChart, setActiveChart }: Props) => {
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
