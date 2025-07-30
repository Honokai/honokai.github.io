import { useEffect, useState } from "react";

export default function FirefoxContainer() {
  const [site, setSite] = useState<string>("https://medium.com/");
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(site)}`)
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }

        throw new Error("Could not proxy server");
      })
      .then((data) => {
        console.log(data.contents);
        setHtml(data.contents);
      });
  }, [site]);

  return (
    <section>
      <header></header>
      <main>
        <iframe
          src={site}
          srcDoc={html}
          height={500}
          width={1000}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        ></iframe>
      </main>
    </section>
  );
}
