const optionsTotalProduct = {
  series: [
    {
      name: "Users",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: "area",
    width: "100%",
    height: 125,
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
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

const optionsTotalSales = {
  series: [
    {
      name: "Users",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: "area",
    width: "100%",
    height: 125,
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
  colors: ["#FF69B4"],
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
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

const optionsProductAddByMonth = {
  series: [
    {
      data: [23400, 15000, 30000, 22000, 10000, 23400, 5000],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#3A36DB"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#06152B"],
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      show: false,
    },
  },
};

const optionsProductSalesAnalytics = {
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

const chartTotalProductElement = document.querySelector(
  "main .graphics-info-container .graphic-01 .graphics .total-product #chart-total-product"
);
const chartTotalSalesElement = document.querySelector(
  "main .graphics-info-container .graphic-01 .graphics .total-sales #chart-total-sales"
);
const chartProductAddByMonthElement = document.querySelector(
  "main .graphics-info-container .graphic-02 .product-add-by-month #chart-product-add-by-month"
);
const chartProductSalesAnalyticsElement = document.querySelector(
  "main .graphics-info-container .graphic-02 .product-sales-analytics #chart-product-sales-analytics"
);

const chartTotalProduct = new ApexCharts(
  chartTotalProductElement,
  optionsTotalProduct
);
const chartTotalSales = new ApexCharts(
  chartTotalSalesElement,
  optionsTotalSales
);
const chartProductAddByMonth = new ApexCharts(
  chartProductAddByMonthElement,
  optionsProductAddByMonth
);
const chartProductSalesAnalytics = new ApexCharts(
  chartProductSalesAnalyticsElement,
  optionsProductSalesAnalytics
);

chartTotalProduct.render();
chartTotalSales.render();
chartProductAddByMonth.render();
chartProductSalesAnalytics.render();

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
