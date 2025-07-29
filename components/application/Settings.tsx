import "../../src/css/settings.css";
import SearchIcon from "../../src/assets/search.svg?react";
import MenuIcon from "../../src/assets/open-menu-symbolic.svg?react";
import { techStackList } from "../../utils/techStack";

export default function Settings() {
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
          <li>About me</li>
          <li>Projects</li>
        </ul>
      </section>
      <section className="main-content">
        <div className="">
          <div>System</div>
          <button>&times;</button>
        </div>
        <header>
          <img
            className="avatar"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <p className="title">Emerson Fernandes</p>
        </header>
        <main>
          <div className="">
            <div>
              <h4>Tech stack</h4>
              <div>
                {techStackList.map((tech) => (
                  <div className="tech-entry">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4>Projects</h4>
              <div>
                <div>Data Integrator</div>
                <div>Help Desk</div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
