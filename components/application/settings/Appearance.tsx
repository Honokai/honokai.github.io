const accentColors = [
  "hsl(213, 76%, 55%)",
  "hsl(189, 66%, 39%)",
  "hsl(131, 44%, 40%)",
  "hsl(41, 100%, 39%)",
  "hsl(23, 100%, 46%)",
  "hsl(353, 79%, 54%)",
  "hsl(331, 58%, 61%)",
  "hsl(285, 45%, 46%)",
  "hsl(209, 16%, 51%)",
] as const;

const backgroudPhotos = [
  "https://media.istockphoto.com/id/814423752/pt/foto/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=OsVhb44sgd5Z8uFVjMyFiC-VfcPHBFW9PlJ-UoM_An8=",
  "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg",
];

export default function Appearance() {
  return (
    <main className="appearance dark">
      <section title="Theme style" className="">
        <header>
          <span className="section-title">Style</span>
        </header>
        <main>
          <div className="card">
            <div className="flex flex-column">
              <div className="desktop-background">
                <div className="small-primary-white-window">
                  <div></div>
                  <div></div>
                </div>
                <div className="small-secondary-dark-window"></div>
              </div>
              <span>Default</span>
            </div>
            <div className="flex flex-column">
              <div className="desktop-background active">
                <div className="small-primary-dark-window">
                  <div></div>
                  <div></div>
                </div>
                <div className="small-secondary-dark-window"></div>
              </div>
              <span>Dark</span>
            </div>
          </div>
        </main>
      </section>
      <section title="Accent color" className="">
        <header>
          <span className="section-title">Accent Color</span>
        </header>
        <main>
          <div className="card">
            {accentColors.map((color) => (
              <span
                className="accent-circle"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </main>
      </section>
      <section title="Desktop background" className="">
        <header>
          <span className="section-title">Background</span>
          <button type="button">+ Add Picture</button>
        </header>
        <main>
          <div className="card">
            <div className="gallery">
              {backgroudPhotos.map((photo) => (
                <img className="background-photo-preview" src={photo}></img>
              ))}
            </div>
          </div>
        </main>
      </section>
    </main>
  );
}
