/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 vistao.co (https://www.creative-tim.com)

* Coded by vistao.co

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


// ##############################
// // // Chart variables
// #############################

// chartExample1 and SingleLineChart options
let chart_1_2_3_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const RadialBar = {
  series: [44, 55],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        track: {
          background: 'transparent',
        },
        dataLabels: {
          name: {
            fontSize: '23px',
          },
          value: {
            fontSize: '23px',
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '23px',


            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    fill: {
      type: 'solid',
      colors: ['#35e4cb', '#35e4cb'],
    },
    labels: ['Groupe 1', 'Groupe 2'],
  },


};
// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample1 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        },
      ],
    };
  },
  data2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
        },
      ],
    };
  },
  data3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        },
      ],
    };
  },
  options: chart_1_2_3_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let SingleLineChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80],
        },
      ],
    };
  },
  options: chart_1_2_3_options,
};

let MultipleLineChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(103, 250, 34 ,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(103, 250, 34, 0.0)");
    gradientStroke.addColorStop(0, "rgba(103, 250, 34,0)"); //green colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(250, 34, 34,0.2)");
    gradientStroke2.addColorStop(0.4, "rgba(250, 34, 34,0.0)");
    gradientStroke2.addColorStop(0, "rgba(250, 34, 34,0)"); //red colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Réussites",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "rgba(103, 250, 34)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(103, 250, 34)",
          pointBorderColor: "rgba(103, 250, 34)",
          pointHoverBackgroundColor: "rgba(103, 250, 34)",
          pointBorderWidth: 5,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80],
        },
        {
          label: "Échecs",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: "rgba(250, 34, 34)",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "rgba(250, 34, 34)",
          pointBorderColor: "rgba(250, 34, 34)",
          pointHoverBackgroundColor: "rgba(250, 34, 34)",
          pointBorderWidth: 5,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 50, 70, 80, 160, 80],
        },
      ],
    };
  },
  options: chart_1_2_3_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    return {
      labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
      datasets: [
        {
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################
const PitchAxisChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.4)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.3)"); //purple colors
    return {
      labels: ["Couloir gauche", "Axe gauche", "Axe", "Axe droit", "Couloir droit"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 100],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 0,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};

const PitchMultipleAxisChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.4)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.3)"); //purple colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, "rgba(228, 255, 0,0.8)");
    gradientStroke2.addColorStop(0, "rgba(228, 255, 0,0.4)"); //yellow colors

    return {
      labels: ["Couloir gauche", "Axe gauche", "Axe", "Axe droit", "Couloir droit"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 100],
        
        },
        {
          label: "Data2",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: gradientStroke2,
          hoverBackgroundColor: "rgba(228, 255, 0,0.8)",
          hoverBorderColor: "rgba(228, 255, 0,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 50],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 5,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};


const BoxAxisChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.4)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.3)"); //purple colors
    return {
      labels: ["Couloir gauche", "Axe gauche", "Axe", "Axe droit", "Couloir droit"],
      datasets: [
        {
          label: "Data",
          fill: true,

          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 100],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 0,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};


const BoxMultipleAxisChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.4)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.3)"); //purple colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, "rgba(228, 255, 0,0.8)");
    gradientStroke2.addColorStop(0, "rgba(228, 255, 0,0.4)"); //yellow colors

    return {
      labels: ["Couloir gauche", "Axe gauche", "Axe", "Axe droit", "Couloir droit"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 100],
        
        },
        {
          label: "Data2",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: gradientStroke2,
          hoverBackgroundColor: "rgba(228, 255, 0,0.8)",
          hoverBorderColor: "rgba(228, 255, 0,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 50],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 5,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};


// #########################################
// // // used inside src/views/Charts.js
// #########################################
const PitchZoneChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.6)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.4)"); //purple colors
    return {
      labels: ['Haut', 'Médian haut', 'Médian bas ', 'Bas'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          borderWidth: 1,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          data: [65, 59, 80, 81]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 0,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};

const PitchMultipleZoneChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.6)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.4)"); //purple colors
    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, "rgba(228, 255, 0,0.8)");
    gradientStroke2.addColorStop(0, "rgba(228, 255, 0,0.4)"); //yellow colors
    return {
      labels: ['Haut', 'Médian haut', 'Médian bas ', 'Bas'],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 100],
        
        },
        {
          label: "Data2",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: gradientStroke2,
          hoverBackgroundColor: "rgba(228, 255, 0,0.8)",
          hoverBorderColor: "rgba(228, 255, 0,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 50],
        },
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 0,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};

const BoxZoneChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.6)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.4)"); //purple colors
    return {
      labels: ['Haut', 'Médian haut', 'Médian bas ', 'Bas'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          borderWidth: 1,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          data: [65, 59, 80, 81]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 0,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};

const BoxMultipleZoneChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(12,255,255,0.8)");
    gradientStroke.addColorStop(0.8, "rgba(91,227,233,0.6)");
    gradientStroke.addColorStop(0, "rgba(170,234,244,0.4)"); //purple colors
    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, "rgba(228, 255, 0,0.8)");
    gradientStroke2.addColorStop(0, "rgba(228, 255, 0,0.4)"); //yellow colors
    return {
      labels: ['Haut', 'Médian haut', 'Médian bas ', 'Bas'],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: "rgba(12,255,255,0.8)",
          hoverBorderColor: "rgba(12,255,255,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 100],
        
        },
        {
          label: "Data2",
          fill: true,
          backgroundColor: gradientStroke2,
          borderColor: gradientStroke2,
          hoverBackgroundColor: "rgba(228, 255, 0,0.8)",
          hoverBorderColor: "rgba(228, 255, 0,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#be55ed",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#be55ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 50],
        },
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 0,
            fontColor: "#9e9e9e",
            display: false, //this will remove only the label
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.2,
          gridLines: {
            drawBorder: false,
            color: "rgba(186,84,245,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 0,
            fontColor: "#9e9e9e",
            display: false //this will remove only the label
          },
        },
      ],
    },
  },
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################
const PolarChart = {
  data: {
    labels: [
      'Joueur 1',
      'Joueur 2',
      'Joueur 3',
      'Joueur 4',
      'Joueur 5'
    ],
    datasets: [{
      label: 'My First Dataset',
            name: 'Series 1',
            data: [10, 20, 10, 5, 15, 2],
            backgroundColor: "rgb(255, 99, 132)",
            borderWidth: 0,
          }, 
          {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
            backgroundColor: "#35e4cb",
            borderWidth: 0,
    }]
  },
  options: {
    cutoutPercentage: 5,
    legend: {
      display: false,
      position: 'top'
    },
    layout: {
        padding: 0,

    },
    scale: {
    pointLabels: {
        display: true
    }
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
  },
};

const PolarChartSingleSerie = {
  data: {
    labels: [
      'Joueur 1',
      'Joueur 2',
      'Joueur 3',
      'Joueur 4',
      'Joueur 5'
    ],
    datasets: [{
      label: 'My First Dataset',
            name: 'Series 1',
            data: [10, 20, 10, 5, 15, 2],
            backgroundColor: "#35e4cb",
            borderWidth: 0,
          }, 
  ],
  
  },
  options: {
    cutoutPercentage: 5,
    legend: {
      display: false,
      position: 'top'
    },
    layout: {
        padding: 0,

    },
    scale: {
    pointLabels: {
        display: true
    }
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
  },
};


// #########################################
// // // used inside src/views/Charts.js
// #########################################
const PitchBubbleChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(10,200,223,0.8)");
    gradientStroke.addColorStop(0, "rgba(10,200,223,0.4)"); //blue colors
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "zone",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#29c69d",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          data:
          [
            { x: 67, y: 11, r: 10 },
            { x: 51, y: 11, r: 10 },
            { x: 35, y: 11, r: 10 },
            { x: 17, y: 11, r: 10 },
            { x: 2, y: 11, r: 10 },
            { x: 67, y: 33, r: 10 },
            { x: 51, y: 33, r: 10 },
            { x: 35, y: 33, r: 10 },
            { x: 17, y: 33, r: 10 },
            { x: 2, y: 33, r: 10 },
            { x: 67, y: 63, r: 10 },
            { x: 51, y: 63, r: 10 },
            { x: 35, y: 63, r: 10 },
            { x: 17, y: 63, r: 10 },
            { x: 2, y: 63, r: 10 },
            { x: 67, y: 83, r: 10 },
            { x: 51, y: 83, r: 10 },
            { x: 35, y: 83, r: 10 },
            { x: 17, y: 83, r: 10 },
            { x: 2, y: 83, r: 10 },
          ]
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 100,
            padding: 0,
            
            fontColor: "transparent",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 70,
            padding: 0,
            fontColor: "transparent",
          },
        },
      ],
    },
  },
};

const PitchMultipleBubbleChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(10,200,223,0.8)");
    gradientStroke.addColorStop(0, "rgba(10,200,223,0.4)"); //blue colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, "rgba(228, 255, 0,0.8)");
    gradientStroke2.addColorStop(0, "rgba(228, 255, 0,0.4)"); //purple colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "zone catégorie 1",
          fill: false,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#29c69d",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          data:
          [
            { x: 67, y: 11, r: 10 },
            { x: 51, y: 11, r: 10 },
            { x: 35, y: 11, r: 10 },
            { x: 17, y: 11, r: 10 },
            { x: 2, y: 11, r: 10 },
            { x: 67, y: 33, r: 10 },
            { x: 51, y: 33, r: 10 },
            { x: 35, y: 33, r: 10 },
            { x: 17, y: 33, r: 10 },
            { x: 2, y: 33, r: 10 },
            { x: 67, y: 63, r: 10 },
            { x: 51, y: 63, r: 10 },
            { x: 35, y: 63, r: 20 },
            { x: 17, y: 63, r: 10 },
            { x: 2, y: 63, r: 40 },
            { x: 67, y: 83, r: 10 },
            { x: 51, y: 83, r: 10 },
            { x: 35, y: 83, r: 10 },
            { x: 17, y: 83, r: 10 },
            { x: 2, y: 83, r: 10 },
          ]
        },
        {
          label: "zone catégorie 2",
          fill: false,
          backgroundColor: gradientStroke2,
          hoverBackgroundColor: gradientStroke2,
          borderColor: "rgba(228, 255, 0,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          data:
          [
            { x: 67, y: 11, r: 10 },
            { x: 51, y: 11, r: 10 },
            { x: 35, y: 11, r: 10 },
            { x: 17, y: 11, r: 10 },
            { x: 2, y: 11, r: 10 },
            { x: 67, y: 33, r: 10 },
            { x: 51, y: 33, r: 10 },
            { x: 35, y: 33, r: 10 },
            { x: 17, y: 33, r: 10 },
            { x: 2, y: 33, r: 10 },
            { x: 67, y: 63, r: 10 },
            { x: 51, y: 63, r: 10 },
            { x: 35, y: 63, r: 10 },
            { x: 17, y: 63, r: 10 },
            { x: 2, y: 63, r: 10 },
            { x: 67, y: 83, r: 10 },
            { x: 51, y: 83, r: 10 },
            { x: 35, y: 83, r: 10 },
            { x: 17, y: 83, r: 10 },
            { x: 2, y: 83, r: 40 },
          ]
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 100,
            padding: 0,
            
            fontColor: "transparent",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 70,
            padding: 0,
            fontColor: "transparent",
          },
        },
      ],
    },
  },
};


const BoxBubbleChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(10,200,223,0.8)");
    gradientStroke.addColorStop(0, "rgba(10,200,223,0.1)"); //blue colors
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "zone",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#29c69d",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data:
          [
            { x: 67, y: 10, r: 10 },
            { x: 51, y: 10, r: 10 },
            { x: 35, y: 10, r: 10 },
            { x: 17, y: 10, r: 10 },
            { x: 2, y: 10, r: 10 },
            { x: 67, y: 35, r: 10 },
            { x: 51, y: 35, r: 10 },
            { x: 35, y: 35, r: 10 },
            { x: 17, y: 35, r: 10 },
            { x: 2, y: 35, r: 10 },
            { x: 67, y: 60, r: 10 },
            { x: 51, y: 60, r: 10 },
            { x: 35, y: 60, r: 10 },
            { x: 17, y: 60, r: 10 },
            { x: 2, y: 60, r: 10 },
            { x: 67, y: 85, r: 10 },
            { x: 51, y: 85, r: 10 },
            { x: 35, y: 85, r: 10 },
            { x: 17, y: 85, r: 10 },
            { x: 2, y: 85, r: 10 },
          ]
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 100,
            padding: 0,
            
            fontColor: "transparent",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 70,
            padding: 0,
            fontColor: "transparent",
          },
        },
      ],
    },
  },
};
const BoxMultipleBubbleChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(10,200,223,0.8)");
    gradientStroke.addColorStop(0, "rgba(10,200,223,0.4)"); //blue colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, "rgba(228, 255, 0,0.8)");
    gradientStroke2.addColorStop(0, "rgba(228, 255, 0,0.4)"); //purple colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "zone catégorie 1",
          fill: false,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#29c69d",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          data:
          [
            { x: 67, y: 11, r: 10 },
            { x: 51, y: 11, r: 10 },
            { x: 35, y: 11, r: 10 },
            { x: 17, y: 11, r: 10 },
            { x: 2, y: 11, r: 10 },
            { x: 67, y: 33, r: 10 },
            { x: 51, y: 33, r: 10 },
            { x: 35, y: 33, r: 10 },
            { x: 17, y: 33, r: 10 },
            { x: 2, y: 33, r: 10 },
            { x: 67, y: 63, r: 10 },
            { x: 51, y: 63, r: 10 },
            { x: 35, y: 63, r: 20 },
            { x: 17, y: 63, r: 10 },
            { x: 2, y: 63, r: 40 },
            { x: 67, y: 83, r: 10 },
            { x: 51, y: 83, r: 10 },
            { x: 35, y: 83, r: 10 },
            { x: 17, y: 83, r: 10 },
            { x: 2, y: 83, r: 10 },
          ]
        },
        {
          label: "zone catégorie 2",
          fill: false,
          backgroundColor: gradientStroke2,
          hoverBackgroundColor: gradientStroke2,
          borderColor: "rgba(228, 255, 0,0.8)",
          borderWidth: 0,
          borderDash: [],
          borderDashOffset: 0.0,
          data:
          [
            { x: 67, y: 11, r: 10 },
            { x: 51, y: 11, r: 10 },
            { x: 35, y: 11, r: 10 },
            { x: 17, y: 11, r: 10 },
            { x: 2, y: 11, r: 10 },
            { x: 67, y: 33, r: 10 },
            { x: 51, y: 33, r: 10 },
            { x: 35, y: 33, r: 10 },
            { x: 17, y: 33, r: 10 },
            { x: 2, y: 33, r: 10 },
            { x: 67, y: 63, r: 10 },
            { x: 51, y: 63, r: 10 },
            { x: 35, y: 63, r: 10 },
            { x: 17, y: 63, r: 10 },
            { x: 2, y: 63, r: 10 },
            { x: 67, y: 83, r: 10 },
            { x: 51, y: 83, r: 10 },
            { x: 35, y: 83, r: 10 },
            { x: 17, y: 83, r: 10 },
            { x: 2, y: 83, r: 40 },
          ]
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 100,
            padding: 0,
            
            fontColor: "transparent",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "transparent",
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 70,
            padding: 0,
            fontColor: "transparent",
          },
        },
      ],
    },
  },
};


// #########################################
// // // used inside src/views/Charts.js
// #########################################
const EfficiencyDiagram = {
  data: {
    labels: ["Réussis","Échoués"],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#00c09d", "#ff4d4d"],
        borderWidth: 0,
        data: [60, 40],
      },
    ],
  },
  options: {
    cutoutPercentage: 70,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },

    scales: {
      yAxes: [
        {
          display: 0,
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          display: 0,
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

module.exports = {
  chartExample1, // in src/views/Dashboard.js
  SingleLineChart, // in src/views/Dashboard.js
  MultipleLineChart, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
  PitchBubbleChart, // in src/views/Charts.js
  PitchMultipleBubbleChart, // in src/views/Charts.js
  BoxBubbleChart, // in src/views/Charts.js
  BoxMultipleBubbleChart, // in src/views/Charts.js
  PitchAxisChart, // in src/views/Charts.js
  PitchMultipleAxisChart, // in src/views/Charts.js
  BoxAxisChart, // in src/views/Charts.js
  BoxMultipleAxisChart,
  PitchZoneChart, // in src/views/Charts.js
  PitchMultipleZoneChart,
  BoxMultipleZoneChart,
  BoxZoneChart, // in src/views/Charts.js
  PolarChart, // in src/views/Charts.js
  PolarChartSingleSerie, // in src/views/Charts.js
  EfficiencyDiagram, // in src/views/Charts.js
  RadialBar, // in src/views/Charts.js
};
