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

const dropdownMoreActionButton = document.querySelectorAll(
  "main table tbody tr td div .more-actions"
);
const dropdownMoreAction = document.querySelectorAll(
  "main table tbody tr td div .dropdown-more-action"
);

dropdownMoreActionButton.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();

    dropdownMoreAction[index].style.visibility = "visible";
    dropdownMoreAction[index].style.opacity = 1;
  });
});

const dataTable = document.querySelectorAll("main table tbody tr");
const profileUser = document.querySelector(".profile-user");

dataTable.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();

    profileUser.style.display = "flex";
  });
});

const openAddCustomer = document.querySelector(
  "main header .open-add-customer"
);
const closeAddCustomer = document.querySelector(
  ".add-customer header .close-add-customer"
);
const addCustomer = document.querySelector(".add-customer");

openAddCustomer.addEventListener("click", (event) => {
  event.stopPropagation();

  addCustomer.style.display = "flex";
});

closeAddCustomer.addEventListener("click", (event) => {
  event.stopPropagation();

  addCustomer.style.display = "none";
});

document.documentElement.addEventListener("click", () => {
  dropdownMoreAction.forEach((element) => {
    if (profileUser.style.display === "flex") {
      element.style.visibility = "hidden";
      element.style.opacity = 0;
    }
  });

  if (profileUser.style.display === "flex") {
    profileUser.style.display = "none";
  }

  if (addCustomer.style.display === "flex") {
    addCustomer.style.display = "none";
  }
});

const optionsChartPerformance = {
  series: [
    {
      name: "Performance",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6],
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
  colors: ["#FF69B4"],
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "35%",
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: (val) => {
        return val + "%";
      },
    },
  },
};

const optionsChartPie01 = {
  series: [70],
  labels: ["Data 1"],
  chart: {
    type: "donut",
    width: 100,
    height: 125,
  },
  colors: ["#03A89E"],
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

const optionsChartPie02 = {
  series: [60],
  labels: ["Data 1"],
  chart: {
    type: "donut",
    width: 100,
    height: 125,
  },
  colors: ["#3A36DB"],
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

const chartPerformanceElement = document.querySelector(
  ".profile-user .graphics-info #graphic-performance"
);
const chartPie01Element = document.querySelector(
  ".profile-user .graphics-info .graphics-pie #graphic-pie-01"
);
const chartPie02Element = document.querySelector(
  ".profile-user .graphics-info .graphics-pie #graphic-pie-02"
);

const chartPerformance = new ApexCharts(
  chartPerformanceElement,
  optionsChartPerformance
);
const chartPie01 = new ApexCharts(chartPie01Element, optionsChartPie01);
const chartPie02 = new ApexCharts(chartPie02Element, optionsChartPie02);

chartPerformance.render();
chartPie01.render();
chartPie02.render();
