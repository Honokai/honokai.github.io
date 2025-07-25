import { DateTime } from "luxon";

export default function CalendarClock() {
  const currentDate = DateTime.now();
  
  return (
    <button className="calendar-button">
      {`${currentDate.monthShort} ${currentDate.day}`}{" "}
      <span>{currentDate.toFormat("HH:mm")}</span>
    </button>
  );
}
