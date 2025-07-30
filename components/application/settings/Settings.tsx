import "../../../src/css/settings.css";
import SearchIcon from "../../../src/assets/search.svg?react";
import MenuIcon from "../../../src/assets/open-menu-symbolic.svg?react";
import AppearanceIcon from "../../../src/assets/preferences-desktop-appearance-symbolic.svg?react";
import AboutMe from "./AboutMe";
import { useState } from "react";
import Appearance from "./Appearance";

const configurationSections = ["Appearance", "About Me"] as const;

type ConfigurationSectionsOptions = (typeof configurationSections)[number];

export default function Settings() {
  const [configurationSection, setConfigurationSection] =
    useState<ConfigurationSectionsOptions>("About Me");

  return (
    <div className="window">
      <section className="sidebar">
        <header>
          <button>
            <SearchIcon />
          </button>
          <span>Settings</span>
          <button>
            <MenuIcon />
          </button>
        </header>
        <ul>
          <li
            data-active={configurationSection === "Appearance"}
            onClick={() => setConfigurationSection("Appearance")}
          >
            <AppearanceIcon />
            <span>Appearance</span>
          </li>
          <li
            data-active={configurationSection === "About Me"}
            onClick={() => setConfigurationSection("About Me")}
          >
            About me
          </li>
          <li>Projects</li>
        </ul>
      </section>
      <section className="main-content">
        <div className="">
          <div>{configurationSection}</div>
          <button>&times;</button>
        </div>
        {configurationSection === "About Me" && <AboutMe />}
        {configurationSection === "Appearance" && <Appearance />}
      </section>
    </div>
  );
}
