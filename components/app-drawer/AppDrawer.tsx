import { useEffect } from "react";
import useAppDrawer from "../../hooks/useAppDrawer";
import "../../src/css/app-drawer.css";

export default function AppDrawerContainer() {
  const { open } = useAppDrawer();

  useEffect(() => {}, [open]);

  if (!open) {
    return;
  }

  return (
    <div className="backdrop">
      <h1>TESTE</h1>
    </div>
  );
}
