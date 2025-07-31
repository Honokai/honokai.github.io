import { createContext, useContext, useMemo, useState } from "react";

type AppSearchContextProps = {
  search: string;
  updateSearch: (x: string) => void;
};

export const AppSearchContext = createContext<AppSearchContextProps>(
  {} as AppSearchContextProps
);

export function AppSearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState<string>("");
  const updateSearch = (newSearch: string) => setSearch(newSearch);

  const value = useMemo(
    () => ({
      search,
      updateSearch,
    }),
    [search]
  );

  return (
    <AppSearchContext.Provider value={value}>
      {children}
    </AppSearchContext.Provider>
  );
}

export const useAppSearch = () => useContext(AppSearchContext);
