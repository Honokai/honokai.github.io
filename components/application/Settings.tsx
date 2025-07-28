import "../../src/css/settings.css";
import ReactIcon from "../../src/assets/react.svg?react";
import SpringBootIcon from "../../src/assets/springboot.svg?react";
import DotNetIcon from "../../src/assets/dot-net.svg?react";
import LaravelIcon from "../../src/assets/laravel.svg?react";
import MySqlIcon from "../../src/assets/mysql.svg?react";
import OracleIcon from "../../src/assets/oracle.svg?react";
import MongoIcon from "../../src/assets/mongodb.svg?react";
import SearchIcon from "../../src/assets/search.svg?react";
import MenuIcon from "../../src/assets/open-menu-symbolic.svg?react";

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
          <div>Section Name</div>
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
              <p>Tech stack</p>
              <div>
                <div className="tech-entry">
                  <ReactIcon />
                  <span>React</span>
                </div>
                <div className="tech-entry">
                  <SpringBootIcon />
                  <span>Spring Boot</span>
                </div>
                <div className="tech-entry">
                  <DotNetIcon />
                  <span>.Net</span>
                </div>
                <div className="tech-entry">
                  <LaravelIcon />
                  <span>Laravel</span>
                </div>
                <div className="tech-entry">
                  <MySqlIcon />
                  <span>MySQL</span>
                </div>
                <div className="tech-entry">
                  <OracleIcon />
                  <span>Oracle DB</span>
                </div>
                <div className="tech-entry">
                  <MongoIcon />
                  <span>Mongo DB</span>
                </div>
              </div>
            </div>
            <div>
              <p>Projects</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
