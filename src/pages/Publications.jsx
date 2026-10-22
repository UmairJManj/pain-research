import { publications } from "../data.js";
import { Reveal } from "../lib/motion.jsx";
import Footer from "../components/Footer.jsx";

export default function Publications() {
  return (
    <>
      <div className="subhead">
        <Reveal as="div" className="label">Research</Reveal>
        <Reveal as="h1" delay={0.05}>Publications</Reveal>
      </div>

      <ol className="pub-list">
        {publications.map((p, i) => (
          <Reveal as="li" className="pub-item" key={i} delay={i * 0.05}>
            <p className="pub-cite">
              <span dangerouslySetInnerHTML={{ __html: p.cite.replace("Manj, U. J.", "<strong>Manj, U. J.</strong>") }} />{" "}
              <em>{p.venue}</em>{p.after}
              {p.doi && (<> <a className="alink" href={p.doi} target="_blank" rel="noopener">doi</a></>)}
            </p>
          </Reveal>
        ))}
      </ol>

      <Footer />
    </>
  );
}
