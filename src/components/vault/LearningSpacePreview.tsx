import { useState } from "react";
import { BookOpen, ChevronRight, Film, Library } from "lucide-react";
import logoAsset from "../../assets/official-company-logo.png.asset.json";
import { site } from "../../config/site";
import { Button } from "./Button";
import { OverviewVideoModal } from "./OverviewVideoModal";
import { ResourceLibrary } from "./ResourceLibrary";
import type { Cta } from "./types";

export function LearningSpacePreview({ onCta }: { onCta: Cta }) {
  const [selected, setSelected] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const path = site.learningPaths[selected] ?? site.learningPaths[0];
  if (!path) return null;
  return <>
    <div className="learning-space" aria-label="Billionaires Clvb University learning space preview">
      <div className="learning-space__top"><div><img src={logoAsset.url} alt="" /><span>YBC UNIVERSITY<br /><small>YOUR LEARNING SPACE</small></span></div><span className="preview-tag">UNIVERSITY PREVIEW</span></div>
      <div className="learning-space__body">
        <div className="learning-space__nav" role="tablist" aria-label="Learning paths">{site.learningPaths.map((item, index) => <button type="button" role="tab" aria-selected={selected === index} className={selected === index ? "is-active" : ""} key={item.title} onClick={() => setSelected(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><ChevronRight size={14} /></button>)}</div>
        <div className="learning-space__detail" role="tabpanel">
          <span className="learning-space__label">SELECTED PATH · ILLUSTRATIVE PREVIEW</span>
          <BookOpen size={27} aria-hidden="true" />
          <h2>{path.title}</h2><p>{path.overview}</p>
          <div><small>STARTING LESSON</small><strong>{path.lesson}</strong></div>
          <div><small>SUPPORTING RESOURCES</small><span>{path.resources.join(" · ")}</span></div>
          <p className="learning-space__disclaimer">Educational preview only. No personalized legal, tax, credit, or investment advice.</p>
        </div>
      </div>
      <div className="learning-space__utilities"><Button variant="quiet" onClick={() => setLibraryOpen(true)}><Library size={17} />Resource Library</Button><Button variant="quiet" onClick={() => setVideoOpen(true)}><Film size={17} />University Overview · Video coming soon</Button></div>
    </div>
    <OverviewVideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    <ResourceLibrary open={libraryOpen} onClose={() => setLibraryOpen(false)} onCta={onCta} />
  </>;
}