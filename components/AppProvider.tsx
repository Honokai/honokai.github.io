import { AppDrawerProvider } from "../hooks/useAppDrawer";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppDrawerProvider>{children}</AppDrawerProvider>;
}
