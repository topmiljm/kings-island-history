import { useParams } from "react-router-dom";
import coasters from "../data/coasters.json";
import manufacturers from "../data/manufacturers.json";
import records from "../data/records.json";

function formatLabel(id) {
    if (!id) return "Unknown";
    return id
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default function CoasterDetail() {
    const { slug } = useParams();

    const coaster = coasters.find(c => c.slug === slug);

    if (!coaster) {
        return <h1>Coaster not found</h1>;
    }

    const coasterRecords = records.filter(r => r.coasterId === coaster.id);

    const manufacturer = manufacturers.find(
        m => m.id === coaster.manufacturerId
    );

    const { classification, specs, areaHistory, nameHistory, timeline } = coaster;

    return (
        <article className="coaster-detail">
            <header className="coaster-detail-header">
                <h1>{coaster.currentName}</h1>
                <p className="coaster-detail-status">
                    {coaster.status === "operating"
                        ? `Operating since ${coaster.opened}`
                        : `${coaster.opened}–${coaster.closed} (${formatLabel(coaster.status)})`}
                </p>
                {classification && (
                    <div className="coaster-detail-classification">
                        <span>{formatLabel(classification.material)}</span>
                        <span>{formatLabel(classification.design)}</span>
                        {classification.model && (
                            <span>{classification.model}</span>
                        )}
                        {classification.tags?.length > 0 && (
                            <span>{classification.tags.map(formatLabel).join(", ")}</span>
                        )}
                    </div>
                )}
            </header>

            {/* Manufacturer */}
            {manufacturer && (
                <section>
                    <h2>Manufacturer</h2>
                    <p className="coaster-detail-manufacturer">
                        {manufacturer.name} ({manufacturer.country})
                    </p>
                </section>
            )}

            {/* Stats */}
            {specs && (
                <section>
                    <h2>Stats</h2>
                    <ul>
                        {specs.lengthFt && <li>Length: {specs.lengthFt} ft</li>}
                        {specs.heightFt && <li>Height: {specs.heightFt} ft</li>}
                        {specs.dropFt && <li>Drop: {specs.dropFt} ft</li>}
                        {specs.speedMph && <li>Speed: {specs.speedMph} mph</li>}
                        {specs.inversions !== undefined && <li>Inversions: {specs.inversions}</li>}
                        {specs.durationMin && <li>Duration: {specs.durationMin}</li>}
                        {specs.durationSec && <li>Duration: {specs.durationSec} sec</li>}
                        {specs.gForce && <li>Max G-Force: {specs.gForce}g</li>}
                        {specs.capacityPerHour && <li>Capacity: {specs.capacityPerHour}/hr</li>}
                        {specs.costUSD && <li>Cost: ${specs.costUSD.toLocaleString()}</li>}
                    </ul>

                    {/* Racer-style multi-track coasters */}
                    {specs.tracks && (
                        <div>
                            <h3>Tracks</h3>
                            {specs.tracks.map(track => (
                                <div key={track.name} className="coaster-detail-track">
                                    <strong>{track.name}</strong>: {track.lengthFt} ft,{" "}
                                    {track.heightFt} ft tall, {track.speedMph} mph,{" "}
                                    {track.durationMin}
                                </div>
                            ))}
                        </div>
                    )}

                    {specs.elements && (
                        <div>
                            <h3>Elements</h3>
                            <ul>
                                {specs.elements.map((el, i) => (
                                    <li key={i}>{el}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            )}

            {/* Area History */}
            {areaHistory?.length > 0 && (
                <section>
                    <h2>Area History</h2>
                    <div>
                        {areaHistory.map((entry, i) => (
                            <div key={i} className="coaster-detail-history-entry">
                                {formatLabel(entry.areaId)}
                                {" "}
                                <span className="coaster-detail-history-years">
                                    ({entry.from}–{entry.to ?? "present"})
                                </span>
                                {entry.note && (
                                    <div className="coaster-detail-history-note">{entry.note}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Name History */}
            {nameHistory?.length > 1 && (
                <section>
                    <h2>Name History</h2>
                    <div>
                        {nameHistory.map((entry, i) => (
                            <div key={i} className="coaster-detail-history-entry">
                                "{entry.name}"{" "}
                                <span className="coaster-detail-history-years">
                                    ({entry.from}–{entry.to ?? "present"})
                                </span>
                                {entry.reason && (
                                    <div className="coaster-detail-history-note">{entry.reason}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Records */}
            {coasterRecords.length > 0 && (
                <section>
                    <h2>Records</h2>
                    <div>
                        {coasterRecords.map(record => (
                            <div key={record.id} className="coaster-detail-record">
                                <div className="coaster-detail-record-title">{record.title}</div>
                                <div className="coaster-detail-record-meta">
                                    {formatLabel(record.category)} · {record.yearAwarded}
                                    {record.yearLost ? `–${record.yearLost}` : " – present"}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Timeline */}
            {timeline?.length > 0 && (
                <section>
                    <h2>Timeline</h2>
                    <div>
                        {timeline.map((event, i) => (
                            <div key={i} className="coaster-detail-timeline-entry">
                                <span className="coaster-detail-timeline-year">{event.year}</span>
                                {" — "}
                                {event.title || formatLabel(event.type)}
                                {event.description && (
                                    <p className="coaster-detail-timeline-desc">{event.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Notes */}
            {coaster.notes && (
                <section className="coaster-detail-notes">
                    <h2>Notes</h2>
                    <p>{coaster.notes}</p>
                </section>
            )}

            {coaster.rcdbUrl && (
                <p className="coaster-detail-rcdb">
                    <a href={coaster.rcdbUrl} target="_blank" rel="noreferrer">
                        View on RCDB
                    </a>
                </p>
            )}
        </article>
    );
}
