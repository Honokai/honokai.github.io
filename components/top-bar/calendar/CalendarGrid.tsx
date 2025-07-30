import { DateTime } from "luxon";
import CalendarDay from "./CalendarDay";

const WEEKDAY_INITIALS = ["S", "M", "T", "W", "T", "F", "S"];

export default function CalendarGrid({
  grid,
  displayedMonth,
  today,
}: {
  grid: DateTime[][];
  displayedMonth: number;
  today: DateTime;
}) {
  return (
    <table>
      <thead>
        <tr>
          {WEEKDAY_INITIALS.map((dayInitial, index) => (
            <th key={index}>{dayInitial}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {grid.map((week, weekIndex) => (
          <tr key={`week-${weekIndex}`}>
            {week.map((day) => (
              <CalendarDay
                key={day.toISODate()}
                day={day}
                displayedMonth={displayedMonth}
                today={today}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
