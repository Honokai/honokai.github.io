import { DateTime } from "luxon";
import { useMemo, useState } from "react";
import CalendarMonthSelector from "./CalendarMonthSelector";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  const [displayedDate, setDisplayedDate] = useState(DateTime.now());
  const today = DateTime.now();

  const handlePrevMonth = () => {
    setDisplayedDate((d) => d.minus({ months: 1 }));
  };

  const handleNextMonth = () => {
    setDisplayedDate((d) => d.plus({ months: 1 }));
  };

  // Gera a grade de dias para o mês exibido.
  // useMemo garante que a grade só seja recalculada quando o mês mudar.
  const calendarGrid = useMemo(
    () => buildCalendarGrid(displayedDate),
    [displayedDate]
  );

  return (
    <div className="calendar-area">
      <CalendarHeader date={today} />
      <div className="calendar">
        <CalendarMonthSelector
          date={displayedDate}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />
        <CalendarGrid
          grid={calendarGrid}
          displayedMonth={displayedDate.month}
          today={today}
        />
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

function buildCalendarGrid(date: DateTime): DateTime[][] {
  const grid: DateTime[][] = [];

  const startOfMonth = date.startOf("month");
  const firstDayOfGrid =
    startOfMonth.weekday === 7
      ? startOfMonth
      : startOfMonth.minus({ days: startOfMonth.weekday });

  let currentDay = firstDayOfGrid;

  for (let i = 0; i < 6; i++) {
    const week: DateTime[] = [];
    for (let j = 0; j < 7; j++) {
      week.push(currentDay);
      currentDay = currentDay.plus({ days: 1 });
    }
    grid.push(week);
  }

  return grid;
}
