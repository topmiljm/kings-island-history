import { Link } from "react-router-dom";
import coasters from "../data/coasters.json";
import decades from "../data/decades.json";

function getDecade(year) {
  return Math.floor(year / 10) * 10;
}

export default function Decades() {
  // Group coasters by the decade they opened in
  const coastersByDecade = decades.map(decade => {
    const opened = coasters.filter(
      c => getDecade(c.opened) === decade.startYear
    );
    return { ...decade, coasters: opened };
  });

  const maxCount = Math.max(...coastersByDecade.map(d => d.coasters.length));

  // Build a small set of round Y-axis ticks from 0 to maxCount
  const tickCount = Math.min(maxCount, 4) || 1;
  const tickStep = Math.ceil(maxCount / tickCount);
  const ticks = [];
  for (let t = tickStep; t <= maxCount; t += tickStep) {
    ticks.push(t);
  }
  if (ticks[ticks.length - 1] !== maxCount) ticks.push(maxCount);
  const axisMax = ticks[ticks.length - 1];

  return (
    <div className="decades-page">
      <h1>Decades</h1>
      <h2>Coaster Additions by Decade</h2>

      <p className="decades-subtitle">
        Coaster openings grouped by the decade they debuted.
      </p>

      {/* Bar chart */}
      <div className="decades-chart-wrapper">
        <div className="decades-y-axis">
          {ticks.map(tick => (
            <span
              key={tick}
              className="decades-y-tick"
              style={{ bottom: `${(tick / axisMax) * 120}px` }}
            >
              {tick}
            </span>
          ))}
          <span className="decades-y-tick" style={{ bottom: "0px" }}>0</span>
        </div>

        <div className="decades-chart">
          {ticks.map(tick => (
            <div
              key={tick}
              className="decades-gridline"
              style={{ bottom: `${(tick / axisMax) * 120}px` }}
            />
          ))}

          {coastersByDecade.map(decade => (
            <div key={decade.id} className="decades-bar-column">
              <div className="decades-bar-track">
                <div
                  className="decades-bar"
                  style={{
                    height: `${(decade.coasters.length / axisMax) * 100}%`
                  }}
                  title={`${decade.coasters.length} coasters`}
                >
                  <span className="decades-bar-count">
                    {decade.coasters.length}
                  </span>
                </div>
              </div>
              <span className="decades-bar-label">{decade.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="decades-chart-caption">Number of coasters opened</p>

      {/* Decade detail cards */}
      <div className="decades-list">
        {coastersByDecade.map(decade => (
          <section key={decade.id} className="decade-card">
            <h2>{decade.label}</h2>

            <ul className="decade-coaster-list">
              {decade.coasters.length === 0 ? (
                <li className="decade-empty">No coasters opened this decade.</li>
              ) : (
                decade.coasters
                  .sort((a, b) => a.opened - b.opened)
                  .map(c => (
                    <li key={c.id}>
                      <Link to={`/coasters/${c.slug}`}>
                        {c.currentName}
                      </Link>{" "}
                      ({c.opened})
                    </li>
                  ))
              )}
            </ul>

            {decade.highlight && (
              <p className="decade-highlight">
                <em>{decade.highlight}</em>
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
