import { DateTime } from "luxon";

export default function CalendarDay({
  day,
  displayedMonth,
  today,
}: {
  day: DateTime;
  displayedMonth: number;
  today: DateTime;
}) {
  const isToday = day.hasSame(today, "day");
  const isCurrentMonth = day.month === displayedMonth;
  const isWeekendOrNotInThisMonth =
    day.weekday === 6 || day.weekday === 7 || day.month != displayedMonth;

  const classNames = [
    isToday ? "today" : "day",
    !isCurrentMonth ? "is-other-month" : "",
    isWeekendOrNotInThisMonth ? "non-working-days" : "working-days",
  ]
    .filter(Boolean)
    .join(" ");

  return <td className={classNames}>{day.day}</td>;
}
