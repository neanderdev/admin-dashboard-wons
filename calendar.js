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

const calendarElement = document.querySelector(
  "main .schedule-container #calendar"
);

const calendar = new FullCalendar.Calendar(calendarElement, {
  initialView: "dayGridMonth",
  headerToolbar: false,
  dateClick: (info) => {
    alert(info.dateStr);
  },
});

calendar.render();
calendar.setOption("locale", "pt-BR");

const buttonsCalendar = document.querySelectorAll(
  "main header .buttons button"
);

buttonsCalendar.forEach((element) => {
  element.addEventListener("click", (event) => {
    buttonsCalendar.forEach((button) => {
      button.setAttribute("class", button.getAttribute("class").split(" ")[0]);
    });

    calendar.changeView(event.target.getAttribute("class"));

    event.target.setAttribute(
      "class",
      `${event.target.getAttribute("class")} active`
    );
  });
});

const prevButtonCalendarElement = document.querySelector(
  "main .schedule-container .calendar-container header .button-prev-next .prev-calendar"
);
const nextButtonCalendarElement = document.querySelector(
  "main .schedule-container .calendar-container header .button-prev-next .next-calendar"
);
const dateCalendarElement = document.querySelector(
  "main .schedule-container .calendar-container header span"
);

prevButtonCalendarElement.addEventListener("click", (event) => {
  calendar.gotoDate(date);
  calendar.prev();
});
nextButtonCalendarElement.addEventListener("click", (event) => {
  calendar.next();
});
dateCalendarElement.innerHTML = calendar.getDate();

new datedreamer.calendar({
  element: "#calendar-schedule",
  selectedDate: new Date(),
  format: "DD/MM/YYYY",
  hideInputs: true,
  onChange: (event) => {
    console.log(event.detail);
  },
  styles: `
          .datedreamer__calendar_title {
            color: rgba(6, 21, 43, 0.8);
  
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
  
          .datedreamer__calendar_day.datedreamer__calendar_day-header {
            color: rgba(6, 21, 43, 0.7);
  
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: center;
          }
  
          .datedreamer__calendar_day button {
            width: 2.4rem;
            height: 2.4rem;
  
            display: flex;
            justify-content: center;
            align-items: center;
  
            background-color: transparent;
            color: rgba(3, 2, 41, 0.8);
  
            outline: 0;
            border: 0;
  
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: center;
          }
  
          .datedreamer__calendar_day.active button {
            width: 2.4rem;
            height: 2.4rem;
  
            background-color: #3A36DB;
            color: #FFFFFF;
  
            box-shadow: 0 .4rem .4rem rgba(96, 91, 255, 0.25);
  
            border-radius: 1.2rem;
          }
  
          .datedreamer__calendar_day.disabled button {
            color: rgba(3, 2, 41, 0.5);
          }
      `,
});
