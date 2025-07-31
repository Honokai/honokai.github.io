import { DateTime } from "luxon";
import NotificationIcon from "../../src/assets/preferences-system-notifications-symbolic.svg?react";
import { useCallback, useState } from "react";
import Calendar from "./calendar/Calendar";
import { useTime } from "../../hooks/useTime";

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

function Clock() {
  const { time } = useTime();

  return <span>{time.toFormat("HH:mm")}</span>;
}
