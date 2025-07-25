import useAppDrawer from "../../hooks/useAppDrawer";
import "../../src/css/top-menu.css";
import CalendarClock from "./CalendarClock";
import SystemActions from "./SystemActions";

export default function TaskBar() {
  const { handleOpenState } = useAppDrawer();

  return (
    <nav className="taskbar">
      <div>
        <button onClick={() => handleOpenState()} className="">
          Activities
        </button>
      </div>
      <div>
        <CalendarClock />
      </div>
      <div>
        <SystemActions />
      </div>
    </nav>
  );
}
