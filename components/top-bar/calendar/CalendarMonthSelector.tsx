import { DateTime } from "luxon";
import LeftArrow from "../../../src/assets/chevron-left.svg?react";
import RightArrow from "../../../src/assets/chevron-right.svg?react";

export default function CalendarMonthSelector({
  date,
  onPrev,
  onNext,
}: {
  date: DateTime;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="calendar-month-selector">
      <button onClick={onPrev} aria-label="Previous month">
        <LeftArrow />
      </button>
      <span>{date.monthLong}</span>
      <button onClick={onNext} aria-label="Next month">
        <RightArrow />
      </button>
    </div>
  );
}
