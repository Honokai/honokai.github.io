import { useAppDrawer } from "../../hooks/useAppDrawer";
import "../../src/css/app-drawer.css";

export default function AppDrawerContainer() {
  const { open } = useAppDrawer();

  if (!open) {
    return;
  }

  return (
    <div className="backdrop">
      
    </div>
  );
}
