import { createContext, useContext, useMemo, useState } from "react";

type AppDrawerContextProps = {
  open: boolean;
  handleOpenState: () => void;
};

export const AppDrawerContext = createContext<AppDrawerContextProps>(
  {} as AppDrawerContextProps
);

export function AppDrawerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleOpenState = () => setOpen((prev) => !prev);

  const value = useMemo(
    () => ({
      open,
      handleOpenState,
    }),
    [open]
  );

  return (
    <AppDrawerContext.Provider value={value}>
      {children}
    </AppDrawerContext.Provider>
  );
}

export const useAppDrawer = () => useContext(AppDrawerContext);
