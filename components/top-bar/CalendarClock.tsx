import { DateTime } from "luxon";
import LeftArrow from "../../src/assets/chevron-left.svg?react";
import RightArrow from "../../src/assets/chevron-right.svg?react";
import NotificationIcon from "../../src/assets/preferences-system-notifications-symbolic.svg?react";
import { useCallback, useState } from "react";
import Clock from "./Clock";

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export default function CalendarClock() {
  const currentDate = DateTime.now();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleCalendarOpenStatus = useCallback(() => {
    setCalendarOpen((prev) => !prev);
  }, [calendarOpen]);

  return (
    <div className="datetime-area">
      <button className="calendar-button" onClick={handleCalendarOpenStatus}>
        {`${currentDate.monthShort} ${currentDate.day}`}
        <Clock />
      </button>
      {calendarOpen && (
        <div className="notification-calendar">
          <Notification />
          <hr />
          <Calendar />
        </div>
      )}
      <div
        className="backdrop-transparent"
        data-active={calendarOpen}
        onClick={handleCalendarOpenStatus}
      ></div>
    </div>
  );
}

function Notification(): React.ReactNode {
  return (
    <section className="notification">
      <NotificationIcon />
      <p>No Notifications</p>
    </section>
  );
}

function Calendar(): React.ReactNode {
  const currentDate = DateTime.now();

  let monthWeeks: string[][] = buildCalendarWeekDays(currentDate);

  return (
    <div className="calendar-area">
      <div className="calendar-header">
        <span>{currentDate.weekdayLong}</span>
        <div className="calendar-in-evidence">
          {currentDate.monthLong} {currentDate.day} {currentDate.year}
        </div>
      </div>
      <div className="calendar">
        <div className="calendar-month-selector">
          <span>
            <LeftArrow />
          </span>
          <span>{currentDate.monthLong}</span>
          <span>
            <RightArrow />
          </span>
        </div>
        <table>
          <thead>
            <tr>
              {weekDays.map((weekDay) => (
                <th key={weekDay}>{weekDay[0].toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthWeeks.map((week, weekIndex) => (
              <tr key={`week-${weekIndex}`}>
                {week.map((day, dayIndex) => (
                  <td
                    key={`day-${dayIndex}`}
                    className={`${
                      currentDate.day === Number.parseInt(day) ? "today" : "day"
                    }`}
                  >
                    {day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-calendar day-events">
          <span>Today</span>
          <span>No events</span>
        </div>
      </div>

      <div className="btn-calendar">Add World Clocks...</div>
      <div className="btn-calendar">Select Weather Location...</div>
    </div>
  );
}

function buildCalendarWeekDays(currentDate: DateTime<true>): string[][] {
  let monthWeeks: string[][] = [[], [], [], [], [], []];
  let weekIndex = 0;
  let currentDay = 1;

  let month = {
    start: weekDays.indexOf(
      currentDate.startOf("month").weekdayLong.toLowerCase()
    ),
    end: weekDays.indexOf(currentDate.endOf("month").weekdayLong.toLowerCase()),
    endDayNumber: currentDate.endOf("month").day,
  };

  let lastMonthLastDayNumber = 31 + 1 - month.start;

  if (month.start > 0) {
    while (monthWeeks[weekIndex].length < month.start) {
      monthWeeks[weekIndex].push(lastMonthLastDayNumber.toString());
      lastMonthLastDayNumber++;
    }
  }

  while (weekIndex < 6) {
    while (monthWeeks[weekIndex].length < 7) {
      monthWeeks[weekIndex].push(currentDay.toString());
      currentDay++;
      if (currentDay >= month.endDayNumber) {
        currentDay = 1;
      }
    }
    weekIndex++;
  }

  return monthWeeks;
}
