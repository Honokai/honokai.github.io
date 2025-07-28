import { AppDrawerProvider } from "../hooks/useAppDrawer";
import { TimeClockProvider } from "../hooks/useTime";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TimeClockProvider>
      <AppDrawerProvider>{children}</AppDrawerProvider>
    </TimeClockProvider>
  );
}
