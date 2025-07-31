import { AppDrawerProvider } from "../hooks/useAppDrawer";
import { AppSearchContextProvider } from "../hooks/useAppSearch";
import { TimeClockProvider } from "../hooks/useTime";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TimeClockProvider>
      <AppDrawerProvider>
        <AppSearchContextProvider>{children}</AppSearchContextProvider>
      </AppDrawerProvider>
    </TimeClockProvider>
  );
}
