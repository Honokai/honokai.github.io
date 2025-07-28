import { useTime } from "../../hooks/useTime";

export default function Clock() {
  const { time } = useTime();

  return <span>{time.toFormat("HH:mm")}</span>;
}
