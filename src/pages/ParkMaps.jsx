import { useState } from "react";

const MAPS = [
  { year: "1972", file: "1972.jpg", label: "1972" },
  { year: "1973", file: "1973.jpg", label: "1973" },
  { year: "1974", file: "1974.jpg", label: "1974" },
  { year: "1975", file: "1975.jpg", label: "1975" },
  { year: "1976", file: "1976.jpg", label: "1976" },
  { year: "1977", file: "1977.jpg", label: "1977" },
  { year: "1978", file: "1978.jpg", label: "1978" },
  { year: "1978-Safari", file: "1978-Safari.jpg", label: "1978 — Safari Area" },
  { year: "1979", file: "1979.jpg", label: "1979" },
  { year: "1980", file: "1980.jpg", label: "1980" },
  { year: "1981", file: "1981.jpg", label: "1981" },
  { year: "1982", file: "1982.jpg", label: "1982" },
  { year: "1983", file: "1983.jpg", label: "1983" },
  { year: "1984", file: "1984.jpg", label: "1984" },
  { year: "1985", file: "1985.jpg", label: "1985" },
  { year: "1986", file: "1986.jpg", label: "1986" },
  { year: "1987", file: "1987.jpg", label: "1987" },
  { year: "1988", file: "1988.jpg", label: "1988" },
  { year: "1989", file: "1989.jpg", label: "1989" },
  { year: "1989-WaterWorks", file: "1989-WaterWorks.jpg", label: "1989 — WaterWorks" },
  { year: "1990", file: "1990.jpg", label: "1990" },
  { year: "1991", file: "1991.jpg", label: "1991" },
  { year: "1992", file: "1992.jpg", label: "1992" },
  { year: "1993", file: "1993.jpg", label: "1993" },
  { year: "1994", file: "1994.jpg", label: "1994" },
  { year: "1995", file: "1995.jpg", label: "1995" },
  { year: "1996", file: "1996.jpg", label: "1996" },
  { year: "1997", file: "1997.jpg", label: "1997" },
  { year: "1998", file: "1998.jpg", label: "1998" },
  { year: "1999", file: "1999.jpg", label: "1999" },
  { year: "2000", file: "2000.jpg", label: "2000" },
  { year: "2001", file: "2001.jpg", label: "2001" },
  { year: "2002", file: "2002.jpg", label: "2002" },
  { year: "2003", file: "2003.jpg", label: "2003" },
  { year: "2004", file: "2004.jpg", label: "2004" },
  { year: "2005", file: "2005.jpg", label: "2005" },
  { year: "2006", file: "2006.jpg", label: "2006" },
  { year: "2007", file: "2007.jpg", label: "2007" },
  { year: "2008", file: "2008.jpg", label: "2008" },
  { year: "2009", file: "2009.jpg", label: "2009" },
  { year: "2010", file: "2010.jpg", label: "2010" },
  { year: "2011", file: "2011.jpg", label: "2011" },
  { year: "2012", file: "2012.jpg", label: "2012" },
  { year: "2013", file: "2013.jpg", label: "2013" },
  { year: "2014", file: "2014.jpg", label: "2014" },
  { year: "2015", file: "2015.jpg", label: "2015" },
  { year: "2016", file: "2016.jpg", label: "2016" },
  { year: "2017", file: "2017.jpg", label: "2017" },
  { year: "2018", file: "2018.jpg", label: "2018" },
  { year: "2019", file: "2019.jpg", label: "2019" },
  { year: "2020", file: "2020.jpg", label: "2020" },
  { year: "2021", file: "2021.jpg", label: "2021" },
  { year: "2022", file: "2022.jpg", label: "2022" },
  { year: "2023", file: "2023.jpg", label: "2023" },
  { year: "2024", file: "2024.jpg", label: "2024" },
  { year: "2025", file: "2025.jpg", label: "2025" },
  { year: "2026", file: "2026.jpg", label: "2026" },
];

export default function ParkMaps() {
  const [active, setActive] = useState(null);

  const handleKeyDown = (e) => {
    if (!active) return;
    const i = MAPS.findIndex(m => m.file === active.file);
    if (e.key === "ArrowRight" && i < MAPS.length - 1) setActive(MAPS[i + 1]);
    if (e.key === "ArrowLeft" && i > 0) setActive(MAPS[i - 1]);
    if (e.key === "Escape") setActive(null);
  };

  return (
    <div className="park-maps-page" onKeyDown={handleKeyDown} tabIndex={-1}>
      <h1>Park Maps</h1>
      <p className="park-maps-subtitle">
        Official Kings Island park maps from 1972 to 2026. Click any map to enlarge.
      </p>

      <div className="park-maps-grid">
        {MAPS.map((map) => (
          <button
            key={map.year}
            className="park-map-thumb"
            onClick={() => setActive(map)}
            aria-label={`View ${map.label} park map`}
          >
            <img
              src={`/maps/${map.file}`}
              alt={`Kings Island park map ${map.label}`}
              loading="lazy"
            />
            <span className="park-map-thumb-label">{map.label}</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="park-maps-overlay"
          onClick={() => setActive(null)}
        >
          <div
            className="park-maps-lightbox"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="park-maps-lightbox-header">
              <span className="park-maps-lightbox-title">
                Kings Island — {active.label}
              </span>
              <button
                className="park-maps-lightbox-close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <img
              src={`/maps/${active.file}`}
              alt={`Kings Island park map ${active.label}`}
              className="park-maps-lightbox-img"
            />
            <div className="park-maps-lightbox-nav">
              <button
                onClick={() => {
                  const i = MAPS.findIndex(m => m.file === active.file);
                  if (i > 0) setActive(MAPS[i - 1]);
                }}
                disabled={MAPS.findIndex(m => m.file === active.file) === 0}
                className="park-maps-nav-btn"
              >
                ← Previous
              </button>
              <span className="park-maps-nav-count">
                {MAPS.findIndex(m => m.file === active.file) + 1} / {MAPS.length}
              </span>
              <button
                onClick={() => {
                  const i = MAPS.findIndex(m => m.file === active.file);
                  if (i < MAPS.length - 1) setActive(MAPS[i + 1]);
                }}
                disabled={MAPS.findIndex(m => m.file === active.file) === MAPS.length - 1}
                className="park-maps-nav-btn"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="link-to-top-container">
        <h3
          className="link-top-page"
          title="Go To Top of Page"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ^Climb To The Top...
        </h3>
      </div>
    </div>
  );
}
