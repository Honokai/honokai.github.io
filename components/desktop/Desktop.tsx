import TaskBar from "../top-bar/TaskBar";
import AppDrawer from "../app-drawer/AppDrawer";
import Bootup from "./Bootup";
import "../../src/css/desktop.css";
import WindowManager from "./WindowManager";

export default function Desktop() {
  return (
    <div className="container">
      <TaskBar />
      <AppDrawer />
      <WindowManager />
      <Bootup />
    </div>
  );
}
