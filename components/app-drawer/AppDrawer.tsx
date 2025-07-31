import { useAppDrawer } from "../../hooks/useAppDrawer";
import "../../src/css/app-drawer.css";
import SearchIcon from "../../src/assets/search.svg?react";
import firefoxIcon from "../../src/assets/firefox.png";
import { useAppSearch } from "../../hooks/useAppSearch";
import { useEffect, useState } from "react";

export default function AppDrawerContainer() {
  const { open, handleOpenState } = useAppDrawer();

  if (!open) {
    return;
  }

  return (
    <div className="backdrop">
      <div>
        <AppDrawerSearchHeader />
      </div>
      <MainSection handleOpenState={handleOpenState} />
      <div className="footer">
        <div className="applist-container">
          <span>
            <span className="tooltip">Firefox</span>
            <img src={`${firefoxIcon}`} alt="" />
          </span>
          <span>APP 2</span>
          <span>APP 3</span>
        </div>
      </div>
    </div>
  );
}

function AppDrawerSearchHeader() {
  const { search, updateSearch } = useAppSearch();

  return (
    <div>
      <span className="input-search">
        <SearchIcon />
        <input
          type="text"
          value={search}
          onChange={(e) => updateSearch(e.currentTarget.value)}
          placeholder="Type to search"
        />
      </span>
    </div>
  );
}

function MainSection({ handleOpenState }: { handleOpenState: () => void }) {
  const { search } = useAppSearch();

  return (
    <div className="desktop">
      {search.length == 0 ? (
        <div onClick={handleOpenState}></div>
      ) : (
        <section>
          <div className="display-when-no-results">No results</div>
          {availableApps
            .filter((app) => app.name.startsWith(search.toLowerCase()))
            .map((match) => (
              <span>
                <span>{match.name}</span>
                <img src={`${firefoxIcon}`} alt="" />
              </span>
            ))}
        </section>
      )}
    </div>
  );
}

const availableApps = [
  { name: "firefox" },
  { name: "text editor" },
  { name: "terminal" },
  { name: "tour" },
  { name: "videos" },
  { name: "disks" },
  { name: "settings" },
] as const;
