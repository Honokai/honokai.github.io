import { DateTime } from "luxon";
import { createContext, useContext, useEffect, useState } from "react";

type TimeContextProps = {
  time: DateTime<true>;
};

export const ClockTimeContext = createContext<TimeContextProps>(
  {} as TimeContextProps
);

export function TimeClockProvider({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState<DateTime<true>>(DateTime.now());

  useEffect(() => {
    setTimeout(() => {
      setTime(DateTime.now());
    }, 5000);
  }, [time]);

  return (
    <ClockTimeContext.Provider value={{ time }}>
      {children}
    </ClockTimeContext.Provider>
  );
}

export const useTime = () => useContext(ClockTimeContext);
