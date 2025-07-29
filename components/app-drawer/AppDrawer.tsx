import { useAppDrawer } from "../../hooks/useAppDrawer";
import "../../src/css/app-drawer.css";
import SearchIcon from "../../src/assets/search.svg?react";

export default function AppDrawerContainer() {
  const { open, handleOpenState } = useAppDrawer();

  if (!open) {
    return;
  }

  return (
    <div className="backdrop">
      <div>
        <div>
          <span className="input-search">
            <SearchIcon />
            <input type="text" placeholder="Type to search" />
          </span>
        </div>
      </div>
      <div className="desktop">
        <div onClick={handleOpenState}></div>
      </div>
      <div className="footer">
        <div className="applist-container">
          <span>APP 1</span>
          <span>APP 2</span>
          <span>APP 3</span>
        </div>
      </div>
    </div>
  );
}
