import { DateTime } from "luxon";

export default function CalendarHeader({ date }: { date: DateTime }) {
  return (
    <div className="calendar-header">
      <span>{date.weekdayLong}</span>
      <div className="calendar-in-evidence">
        {date.monthLong} {date.day}, {date.year}
      </div>
    </div>
  );
}
