const rand = () => Math.round(Math.random() * 20 - 10);

function generateYearsBetween(startYear = 2020, endYear) {
  const endDate = endYear || new Date().getFullYear();
  let years = [];
  for (var i = startYear; i <= endDate; i++) {
    years.push(startYear);
    startYear++;
  }
  return years;
}

const setPeriod = (years) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const currentYear = new Date().getFullYear();
  const startPeriodYear = currentYear - years;
  const yearList = generateYearsBetween(startPeriodYear, currentYear);

  return yearList.flatMap((year) => {
    return monthNames.map((month) => {
      return `${month.substring(0, 3)}-${year}`;
    });
  });
};

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export const genData = (years) => {
  const period = setPeriod(years);
  return {
    labels: period,
    datasets: [
      {
        label: "Gros revenue",
        data: period.map(() => rand()),
        backgroundColor: period.map(() => getRandomRgb())
      },
      {
        label: "Gros revenue(VAT excluded)",
        data: period.map(() => rand()),
        backgroundColor: period.map(() => getRandomRgb())
      }
    ]
  };
};

export const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        position: "right",
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "YYYY/MM/DD"
          }
        },
        ticks: {
          source: "labels",
          fontSize: 13
          // labels: Array(10).map(() => `${rand()} 0000$`),
          // format: {
          //   signDisplay: "$"
          // },
          // stepSize: 3,
          // beginAtZero: true
        }
      }
    ]
  }
};
