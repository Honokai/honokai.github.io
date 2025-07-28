import { DateTime } from "luxon";
import { useRef } from "react";

export default function Clock() {
  const ref = useRef<HTMLSpanElement>(null);
  
  return <span ref={ref}></span>;
}
