import TaskBar from "../top-bar/TaskBar";
import AppDrawer from "../app-drawer/AppDrawer";

export default function Desktop() {
  return (
    <div className="container">
      <TaskBar />
      <AppDrawer />
    </div>
  );
}
