const optionsVisitors = {
  series: [
    {
      name: "Users",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: "area",
    width: "100%",
    height: 320,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  colors: ["#3A36DB"],
  xaxis: {
    type: "datetime",
    categories: [
      "2023-12-15T08:30:00.000Z",
      "2023-12-15T09:30:00.000Z",
      "2023-12-15T10:30:00.000Z",
      "2023-12-15T11:30:00.000Z",
      "2023-12-15T12:30:00.000Z",
      "2023-12-15T13:30:00.000Z",
      "2023-12-15T14:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

const optionsOrderStatus = {
  series: [40, 25, 35],
  labels: ["Data 1", "Data 2", "Data 3"],
  chart: {
    type: "donut",
    height: 250,
  },
  colors: ["#3A36DB", "#03A89E", "#FF69B4"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: true,
    },
  },
};

const chartVisitorsElement = document.querySelector(
  "main .graphic-container .graphic-visitors #chart-visitors"
);
const chartOrderStatusElement = document.querySelector(
  "main .graphic-container .graphic-order-status #chart-order-status"
);

const chartVisitors = new ApexCharts(chartVisitorsElement, optionsVisitors);
const chartOrderStatus = new ApexCharts(
  chartOrderStatusElement,
  optionsOrderStatus
);

chartVisitors.render();
chartOrderStatus.render();

const openSidebar = document.querySelector("main header div .open-sidebar");
const closeSidebar = document.querySelector("aside div .close-sidebar");
const sidebar = document.querySelector("aside");
const main = document.querySelector("main");

openSidebar.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "0";
  sidebar.style.display = "flex";
  sidebar.style.zIndex = "1";
  sidebar.style.animationName = "showSidebar";

  main.style.overflow = "hidden";
  main.style.filter = "blur(2px)";
});

closeSidebar.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "-100vw";
  sidebar.style.animationName = "";
  sidebar.style.zIndex = "0";

  main.style.overflow = "";
  main.style.filter = "";
});
