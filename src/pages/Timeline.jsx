// import { Link } from "react-router-dom";
import coasters from "../data/coasters.json";
import timelineEvents from "../data/timeline-events.json";

export default function Timeline() {
  const generatedEvents = coasters.flatMap(coaster => {
    const events = [
      {
        year: coaster.opened,
        type: "opening",
        coasterId: coaster.id,
        description: `${coaster.currentName} opens`
      }
    ];

    if (coaster.closed) {
      events.push({
        year: coaster.closed,
        type: "closure",
        coasterId: coaster.id,
        description: `${coaster.currentName} closes`
      });
    }

    return events;
  });

  const events = [...generatedEvents, ...timelineEvents].sort(
    (a, b) => a.year - b.year
  );

  return (
    <div>
      <h1>Timeline</h1>

      {events.map(event => (
        <div key={event.id}>
          <strong>{event.year}</strong> — {event.description}
        </div>
      ))}
    </div>
  );
}