import ApplicationWindow from "./ApplicationWindow";

export default function AboutApplication() {
  return (
    <ApplicationWindow applicationName="About me">
      <div className="frame">
        <section title="About header section">
          <img
            className="avatar"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <p className="title">Emerson Fernandes</p>
        </section>
        <div>
          <section title="Tech Stack" aria-label="Tech Stack">
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>PHP</li>
              <li>Javascript</li>
            </ul>
          </section>
          <section title="Projects">
            <p className="section-title">Projects</p>
            <ul>ERP</ul>
          </section>
        </div>
      </div>
    </ApplicationWindow>
  );
}
