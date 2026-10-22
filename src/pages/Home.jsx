import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile, methods, experience, education, asset } from "../data.js";
import { Reveal, Stagger, StaggerItem } from "../lib/motion.jsx";
import Footer from "../components/Footer.jsx";

function Row({ label, children, id }) {
  return (
    <section className="row" id={id}>
      <Reveal as="div" className="row-label">{label}</Reveal>
      <div className="row-content">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-grid">
      <div className="home-left">
      {/* Hero: who I am + one clear path in */}
      <section className="hero hero-split">
        <div className="hero-copy">
          <motion.div className="label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {profile.role}
          </motion.div>
          <motion.h1
            className="hero-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Is a <span className="hl">painful spinal segment</span> processed differently by the brain?
          </motion.h1>
          <Stagger className="profiles" gap={0.06}>
            <StaggerItem as="span"><Link className="pill" to="/research">See the research</Link></StaggerItem>
            <StaggerItem as="span"><a className="pill" href={profile.orcid} target="_blank" rel="noopener">ORCID</a></StaggerItem>
            <StaggerItem as="span"><a className="pill" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a></StaggerItem>
          </Stagger>
        </div>
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={asset("portrait.png")} alt="Umair Javaid Manj" draggable="false" />
        </motion.div>
      </section>

      <Row label="About" id="about">
        <p>
          I study chronic low back pain by vibrating the painful segment and a healthy segment of the
          same person and comparing the cortical EEG response between them. The aim is a biomarker
          that rests on a mechanism.
        </p>
        <p>
          I am a doctoral researcher in Health and Artificial Intelligence at Auckland University of
          Technology. I also collect and analyse study data at the Centre for Chiropractic Research,
          New Zealand College of Chiropractic.
        </p>
        <p>
          My training is in engineering: a BE in Computer Engineering and an MS in Computational
          Science and Engineering from NUST, Islamabad. Most of my papers deal with one problem:
          accuracy that looks high because of how the data were split or confounded. I check the
          evaluation before I report a number.
        </p>
      </Row>

      <Row label="Experience" id="experience">
        <div className="xp-list">
          {experience.map((x, i) => (
            <Reveal className="xp-item" key={x.role} delay={Math.min(i * 0.04, 0.2)}>
              <div className="xp-top"><h4>{x.role}</h4><span className="xp-date">{x.date}</span></div>
              <div className="xp-org">{x.org}</div>
              <p>{x.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Row>

      <Row label="Education" id="education">
        <div className="xp-list">
          {education.map((x, i) => (
            <Reveal className="xp-item" key={x.degree} delay={Math.min(i * 0.04, 0.2)}>
              <div className="xp-top"><h4>{x.degree}</h4><span className="xp-date">{x.date}</span></div>
              <div className="xp-org">{x.org}</div>
              {x.note && <p>{x.note}</p>}
            </Reveal>
          ))}
        </div>
      </Row>

      <Row label="Methods">
        {Object.entries(methods).map(([group, items]) => (
          <div className="stack-group" key={group}>
            <h4>{group}</h4>
            <Stagger className="tags" gap={0.03} as="ul">
              {items.map((t) => (<StaggerItem as="li" key={t}>{t}</StaggerItem>))}
            </Stagger>
          </div>
        ))}
      </Row>

      <Row label="Contact">
        <div className="kv">
          <a className="alink" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="alink" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a className="alink" href={profile.orcid} target="_blank" rel="noopener">ORCID 0009-0008-7085-3662</a>
          <span className="muted">{profile.location}</span>
        </div>
      </Row>

      </div>

      {/* The protocol in two minutes, beside the profile. */}
      <aside className="home-right" aria-label="Protocol video">
        <div className="video-card">
          <video controls playsInline muted preload="metadata" poster={asset("poster.jpg")}>
            <source src={asset("protocol.mp4")} type="video/mp4" />
            Your browser cannot play this video. <a href={asset("protocol.mp4")}>Download it</a>.
          </video>
          <p>
            The planned protocol in two minutes: participant setup, tactor placement over the
            paraspinal muscles, and the expected EEG contrast. The final panel shows the hypothesis,
            not measured data.
          </p>
        </div>
      </aside>

      <Footer />
    </div>
  );
}
