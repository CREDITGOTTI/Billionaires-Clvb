import { useMemo, useState } from "react";
import { BookOpen, ChevronRight, FileText, GraduationCap, LayoutDashboard, Search } from "lucide-react";
import { Button } from "../ui/button";
import { site } from "../../config/site";

type View = "lessons" | "materials" | "guide";

export function UniversityExplorer() {
  const [campusIndex, setCampusIndex] = useState(0);
  const [view, setView] = useState<View>("lessons");
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [query, setQuery] = useState("");
  const campus = site.campuses[campusIndex] ?? site.campuses[0];
  const filteredCampuses = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return site.campuses.map((item, index) => ({ item, index }));
    return site.campuses
      .map((item, index) => ({ item, index }))
      .filter(({ item }) =>
        `${item.name} ${item.scope} ${item.summary}`.toLowerCase().includes(normalized),
      );
  }, [query]);
  if (!campus) return null;

  const chooseCampus = (index: number) => {
    setCampusIndex(index);
    setSelectedLesson(0);
    setSelectedMaterial(0);
    setView("lessons");
  };
  return (
    <section className="campus-explorer" aria-labelledby="campus-heading">
      <div className="campus-explorer__crumb">
        <LayoutDashboard size={14} aria-hidden="true" />
        <span>YBC UNIVERSITY</span>
        <ChevronRight size={12} aria-hidden="true" />
        <span>DASHBOARD</span>
        <span className="preview-tag">UNIVERSITY PREVIEW</span>
      </div>
      <div className="campus-explorer__catalog">
        <div className="campus-explorer__catalog-head">
          <span className="campus-explorer__label">EXPLORE 15 LEARNING CAMPUSES</span>
          <label className="campus-explorer__search">
            <Search size={15} aria-hidden="true" />
            <span className="sr-only">Search campuses</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                const nextQuery = event.target.value;
                setQuery(nextQuery);
                const normalized = nextQuery.trim().toLowerCase();
                if (!normalized) return;
                const firstMatch = site.campuses.findIndex((item) =>
                  `${item.name} ${item.scope} ${item.summary}`.toLowerCase().includes(normalized),
                );
                if (firstMatch >= 0) chooseCampus(firstMatch);
              }}
              placeholder="Search campuses"
            />
          </label>
        </div>
        <div className="campus-explorer__grid" role="tablist" aria-label="University campuses">
          {filteredCampuses.map(({ item, index }) => (
              <Button
                key={item.name}
                type="button"
                variant="ghost"
                role="tab"
                id={`campus-tab-${index}`}
                aria-selected={campusIndex === index}
                aria-controls="campus-panel"
                tabIndex={campusIndex === index ? 0 : -1}
                onClick={() => chooseCampus(index)}
                onKeyDown={(event) => {
                  if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) {
                    event.preventDefault();
                    const direction =
                      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
                    const current = filteredCampuses.findIndex((entry) => entry.index === index);
                    const nextPosition =
                      (current + direction + filteredCampuses.length) % filteredCampuses.length;
                    const next = filteredCampuses[nextPosition]?.index;
                    if (next === undefined) return;
                    chooseCampus(next);
                    document.getElementById(`campus-tab-${next}`)?.focus();
                  }
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.name}</strong>
                <small>{item.scope}</small>
              </Button>
            ))}
          {filteredCampuses.length === 0 && (
            <p className="campus-explorer__empty">No campuses match that search.</p>
          )}
        </div>
      </div>
      <div className="campus-explorer__layout">
        <div
          className="campus-explorer__panel"
          id="campus-panel"
          role="tabpanel"
          aria-labelledby={`campus-tab-${campusIndex}`}
        >
          <div className="campus-explorer__panel-head">
            <div>
              <p className="eyebrow eyebrow--accent">SELECTED CAMPUS</p>
              <h3>{campus.name}</h3>
              <p>{campus.summary}</p>
            </div>
            <GraduationCap size={34} aria-hidden="true" />
          </div>
          <div className="campus-explorer__views" role="tablist" aria-label="Campus views">
            <Button
              type="button"
              variant={view === "lessons" ? "default" : "ghost"}
              role="tab"
              aria-selected={view === "lessons"}
              onClick={() => setView("lessons")}
            >
              Lesson previews
            </Button>
            <Button
              type="button"
              variant={view === "materials" ? "default" : "ghost"}
              role="tab"
              aria-selected={view === "materials"}
              onClick={() => setView("materials")}
            >
              Tools &amp; Materials
            </Button>
            <Button
              type="button"
              variant={view === "guide" ? "default" : "ghost"}
              role="tab"
              aria-selected={view === "guide"}
              onClick={() => setView("guide")}
            >
              How to Use the University
            </Button>
          </div>
          {view === "lessons" && (
            <div className="campus-explorer__content">
              <div className="campus-explorer__lesson-list">
                {campus.lessons.map((lesson, index) => (
                  <Button
                    key={lesson}
                    type="button"
                    variant="outline"
                    className={selectedLesson === index ? "is-selected" : ""}
                    aria-pressed={selectedLesson === index}
                    onClick={() => setSelectedLesson(index)}
                  >
                    <BookOpen size={16} aria-hidden="true" />
                    <span>{lesson}</span>
                    <ChevronRight size={15} aria-hidden="true" />
                  </Button>
                ))}
              </div>
              <div className="campus-explorer__preview">
                <span>SAMPLE LESSON PREVIEW</span>
                <h4>{campus.lessons[selectedLesson] ?? campus.lessons[0]}</h4>
                <p>{campus.sample}</p>
                <small>{campus.note}</small>
              </div>
            </div>
          )}
          {view === "materials" && (
            <div className="campus-explorer__content">
              <div className="campus-explorer__materials">
                {campus.materials.map((material, index) => (
                  <Button
                    key={material}
                    type="button"
                    variant="outline"
                    className={selectedMaterial === index ? "is-selected" : ""}
                    aria-pressed={selectedMaterial === index}
                    onClick={() => setSelectedMaterial(index)}
                  >
                    <FileText size={17} aria-hidden="true" />
                    <span>{material}</span>
                    <small>Preview</small>
                  </Button>
                ))}
              </div>
              <div className="campus-explorer__preview">
                <span>MATERIAL PREVIEW</span>
                <h4>{campus.materials[selectedMaterial] ?? campus.materials[0]}</h4>
                <p>
                  This illustrative supporting material helps organize the educational concepts
                  introduced in {campus.name}.
                </p>
                <small>No file is downloaded and no progress is recorded. {campus.note}</small>
              </div>
            </div>
          )}
          {view === "guide" && (
            <ol className="campus-explorer__guide">
              {[
                "Choose your starting campus",
                "Watch the foundational training",
                "Use the supporting materials",
                "Bring questions to the monthly live call",
                "Request advisory if needed",
              ].map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          )}
          <p className="campus-explorer__disclosure">
            Specific curriculum and resource titles are illustrative previews, not a newly verified
            live catalog. {campus.note}
          </p>
        </div>
      </div>
      <div className="campus-explorer__benefits">
        <strong>CONFIRMED MEMBERSHIP BENEFITS</strong>
        <span>
          Hundreds of hours of step by step content <i /> Recordings <i /> Monthly meetup &amp; live
          call <i /> Templates <i /> Ebooks <i /> Affidavit templates
        </span>
      </div>
    </section>
  );
}
