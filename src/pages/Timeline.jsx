import coasters from "../data/coasters.json";
import timelineEvents from "../data/timeline-events.json";
import records from "../data/records.json";

const TYPE_COLORS = {
    opening: "#1D9E75",
    closure: "#D85A30",
    area: "#378ADD",
    record: "#7F77DD",
    park: "#888780",
    event: "#888780"
};

export default function Timeline() {
    const generatedEvents = coasters.flatMap(coaster => {
        const events = [
            {
                id: `${coaster.id}-opening`,
                year: coaster.opened,
                type: "opening",
                coasterId: coaster.id,
                description: `${coaster.currentName} opens`
            }
        ];

        if (coaster.closed) {
            events.push({
                id: `${coaster.id}-closure`,
                year: coaster.closed,
                type: "closure",
                coasterId: coaster.id,
                description: `${coaster.currentName} closes`
            });
        }

        return events;
    });

    const recordEvents = records.map(r => {
        const coaster = coasters.find(c => c.id === r.coasterId);
        const coasterName = coaster?.currentName ?? "Unknown coaster";

        return {
            id: `${r.id}-awarded`,
            year: r.yearAwarded,
            type: "record",
            coasterId: r.coasterId,
            title: coasterName,
            description: r.title
        };
    });

    const events = [...generatedEvents, ...timelineEvents, ...recordEvents].sort(
        (a, b) => a.year - b.year
    );

    return (
        <div>
            <h1>Timeline</h1>

            <div className="timeline-legend">
                {Object.entries({
                    opening: "Opening",
                    closure: "Closure",
                    area: "Area",
                    record: "Record",
                    park: "Park / event"
                }).map(([type, label]) => (
                    <span key={type} className="timeline-legend-item">
                        <span
                            className="timeline-dot"
                            style={{ backgroundColor: TYPE_COLORS[type] }}
                        />
                        {label}
                    </span>
                ))}
            </div>

            <div className="timeline-list">
                {events.map(event => (
                    <div key={event.id} className="timeline-row">
                        <span
                            className="timeline-dot"
                            style={{ backgroundColor: TYPE_COLORS[event.type] || TYPE_COLORS.event }}
                        />
                        <div>
                            <strong>{event.year}</strong> — {event.title ?? event.description}
                            {event.title && event.description && (
                                <p className="timeline-description">{event.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
