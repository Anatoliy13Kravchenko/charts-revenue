import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { genData, options } from "./config.ts";

const Driver = () => {
  const [years, setYears] = useState(2);
  const [data, setData] = useState(genData(years));

  useEffect(() => {
    setData(genData(years));
  }, [years]);

  return (
    <div>
      <label>
        Set period by last:
        <input
          min={"1"}
          width="20"
          type="number"
          value={years}
          onChange={(event) => setYears(event.target.value)}
        />
        years
      </label>
      <Bar key={"drivers"} data={data} options={options} type={"line"} />
    </div>
  );
};

export default Driver;
