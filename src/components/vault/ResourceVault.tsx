import { UniversityExplorer } from "./UniversityExplorer";

export function ResourceVault() {
  return (
    <section className="section section--resources">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">UNIVERSITY CAMPUS / 03</p>
            <h2 id="campus-heading">Join thousands of entrepreneurs building wealth together.</h2>
          </div>
          <p>
            Explore specialized learning campuses built around credit, business, ownership,
            technology, and legacy. Start with the fundamentals, then choose the topics that match
            your next move.
          </p>
        </div>
        <UniversityExplorer />
      </div>
    </section>
  );
}
