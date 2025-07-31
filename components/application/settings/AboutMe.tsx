import { techStackList } from "../../../utils/techStack";

export default function AboutMe() {
  return (
    <>
      <header>
        <img
          className="avatar"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
        <p className="title">Emerson Fernandes</p>
      </header>
      <main className="about-me">
        <div className="">
          <div className="card">
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
    </>
  );
}
