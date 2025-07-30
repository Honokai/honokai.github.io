export default function Appearance() {
  return (
    <main className="appearance">
      <section className="">
        <header>
          <h5>Style</h5>
        </header>
        <main className="card">
          <div>
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
      <section className="">
        <header>
          <h5>Accent Color</h5>
        </header>
      </section>
      <section className="">
        <header>
          <h5>Background</h5>
        </header>
      </section>
    </main>
  );
}
