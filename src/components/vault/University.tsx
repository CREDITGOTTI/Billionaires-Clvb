import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "../../config/site";
import logoAsset from "../../assets/official-company-logo.png.asset.json";
const assetUrl = logoAsset.url;

export function University() {
  const [expanded, setExpanded] = useState<number | null>(0);
  return (
    <section id="university" className="section section--university">
      <div className="shell">
        <div className="university-layout">
          <div className="university-intro">
            <p className="eyebrow eyebrow--accent">THE UNIVERSITY / 02</p>
            <h2>
              Knowledge is a form of agency.
              <br />
              <em>Build with purpose.</em>
            </h2>
            <p>
              Access hundreds of hours of step by step educational content, recorded training,
              practical resources, and a monthly live community call through Billionaires Clvb
              University.
            </p>
            <div className="oneness-statement"><strong>{site.mission.headline}</strong><p>{site.mission.text}</p><a className="mission-source" href={site.mission.sourceUrl} target="_blank" rel="noopener noreferrer">Consumer credit education · Read Title 15, Chapter 41 ↗</a></div>
            <div className="university-seal">
              <img src={assetUrl} alt="Billionaires Clvb University emblem" loading="lazy" />
              <span>
                LEARN WITH INTENTION
                <br />
                BUILD WITH PURPOSE
              </span>
            </div>
          </div>
          <div className="curriculum">
            <div className="curriculum__head">
              <span>THE CURRICULUM</span>
              <span>06 PATHWAYS</span>
            </div>
            {site.curriculum.map((item, i) => (
              <div
                className={`curriculum-item ${expanded === i ? "is-open" : ""}`}
                key={item.title}
              >
                <button
                  type="button"
                  aria-expanded={expanded === i}
                  aria-controls={`curriculum-${i}`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="curriculum-item__number">0{i + 1}</span>
                  <span>{item.title}</span>
                  <ChevronDown size={19} />
                </button>
                <div
                  id={`curriculum-${i}`}
                  className="curriculum-item__detail"
                  hidden={expanded !== i}
                >
                  <p>{item.text}</p>
                  <small>{item.detail}</small>
                </div>
              </div>
            ))}
            <div className="curriculum__includes">
              INCLUDED IN YOUR MEMBERSHIP{" "}
              <span>
                Recorded training <i /> Monthly meetup &amp; live call <i /> Templates <i /> Ebooks{" "}
                <i /> Affidavit templates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
