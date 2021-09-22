import "../styles.css";
import * as React from "react";
import Header from "./Header";

export default function App() {
  const [activeChart, setActiveChart] = React.useState("");

  return (
    <div className="App">
      <Header setActiveChart={setActiveChart} activeChart={activeChart} />
    </div>
  );
}
