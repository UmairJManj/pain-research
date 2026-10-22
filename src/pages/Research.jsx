import { publications, protocolSteps, pilot } from "../data.js";
import { Reveal, Stagger, StaggerItem, SpotlightCard } from "../lib/motion.jsx";
import Footer from "../components/Footer.jsx";

export default function Research() {
  return (
    <>
      <div className="subhead">
        <Reveal as="div" className="label">Doctoral research</Reveal>
        <Reveal as="h1" delay={0.05}>Segmental EEG in chronic low back pain</Reveal>
        <Reveal as="p" delay={0.1}>
          The question, the protocol, what the first pilot showed, and the papers behind the methods.
        </Reveal>
      </div>

      <h2 className="group-title" id="question">The question</h2>
      <Reveal as="p" className="hero-body">
        Earlier EEG studies found larger cortical responses to stimulation of the low back in people
        with chronic low back pain than in people without it (Clauwaert et al., 2024; Jacobs et al.,
        2016). Dörig et al. (2026) found no group difference.
      </Reveal>
      <Reveal as="p" className="hero-body">
        All of these compare groups of people. I compare segments within one person: the segment that
        hurts against one that does not. If the painful segment is amplified, that difference should
        show at the sensory cortex, with each participant as their own control.
      </Reveal>

      <h2 className="group-title" id="protocol">Protocol</h2>
      <Reveal as="p" className="hero-body">
        The protocol translates the Zurich paraspinal vibration fMRI paradigm (Cole et al., 2022;
        Guekos et al., 2023; Dörig et al., 2026) to 64 channel EEG: 80 Hz vibration at nine levels
        from T3 to S1. The study is case control, 34 people with chronic low back pain against 34 pain
        free, sized in G*Power. Source estimation with sLORETA, representational similarity analysis
        and mixed models are planned.
      </Reveal>
      <ol className="pub-list">
        {protocolSteps.map((s, i) => (
          <Reveal as="li" className="pub-item" key={i} delay={i * 0.05}>
            <p className="pub-cite"><strong>{i + 1}.</strong> {s}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <SpotlightCard className="lab-card" style={{ marginTop: "1rem" }}>
          <div className="lab-top"><h3>Why within person</h3></div>
          <p>
            Group comparisons mix pain with everything else that differs between people. Comparing
            two segments of one back removes most of that, and none of the studies above test this
            contrast directly.
          </p>
        </SpotlightCard>
      </Reveal>

      <h2 className="group-title" id="pilot">Pilot 1: what the data said</h2>
      <Reveal as="p" className="hero-body">
        One participant, 75 tactor placements, 73 kept. I report the result as it came out, including
        the part I had to withdraw.
      </Reveal>
      <Stagger className="proj-stack" gap={0.05}>
        {pilot.map((p) => (
          <StaggerItem key={p.title}>
            <SpotlightCard className="proj-card lab-card">
              <div className="lab-top">
                <h3>{p.title}</h3>
                <span className="lab-cert">{p.num}</span>
              </div>
              <p>{p.blurb}</p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal as="p" className="hero-body">
        Until those three fixes hold, the level question cannot be asked. The per level figures are
        kept so the null result can be checked by eye.
      </Reveal>

      <h2 className="group-title" id="publications">Publications</h2>
      <Reveal as="p" className="hero-body">My name is in bold. Work under review is marked.</Reveal>
      <ol className="pub-list">
        {publications.map((p, i) => (
          <Reveal as="li" className="pub-item" key={i} delay={i * 0.05}>
            <p className="pub-cite" dangerouslySetInnerHTML={{ __html: p.cite.replace("Manj, U. J.", "<strong>Manj, U. J.</strong>") }} />
            <p className="pub-venue">
              <em>{p.venue}</em>
              {p.doi && (<> <a className="alink" href={p.doi} target="_blank" rel="noopener">doi</a></>)}
            </p>
            {p.status !== "Published" && <span className="pub-badge">{p.status}</span>}
          </Reveal>
        ))}
      </ol>

      <Footer />
    </>
  );
}
