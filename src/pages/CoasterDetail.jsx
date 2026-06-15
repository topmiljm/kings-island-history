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
        <article>
            <header>
                <h1>{coaster.currentName}</h1>
                <p>
                    {coaster.status === "operating"
                        ? `Operating since ${coaster.opened}`
                        : `${coaster.opened}–${coaster.closed} (${formatLabel(coaster.status)})`}
                </p>
                {classification && (
                    <div>
                        <span>{formatLabel(classification.material)}</span>
                        {" · "}
                        <span>{formatLabel(classification.design)}</span>
                        {classification.model && (
                            <>
                                {" · "}
                                <span>{classification.model}</span>
                            </>
                        )}
                        {classification.tags?.length > 0 && (
                            <>
                                {" · "}
                                {classification.tags.map(formatLabel).join(", ")}
                            </>
                        )}
                    </div>
                )}
            </header>

            {/* Manufacturer */}
            {manufacturer && (
                <section>
                    <h2>Manufacturer</h2>
                    <p>{manufacturer.name} ({manufacturer.country})</p>
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
                                <div key={track.name}>
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
                    <ul>
                        {areaHistory.map((entry, i) => (
                            <li key={i}>
                                {formatLabel(entry.areaId)}
                                {" "}
                                ({entry.from}–{entry.to ?? "present"})
                                {entry.note && <> — {entry.note}</>}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Name History */}
            {nameHistory?.length > 1 && (
                <section>
                    <h2>Name History</h2>
                    <ul>
                        {nameHistory.map((entry, i) => (
                            <li key={i}>
                                "{entry.name}" ({entry.from}–{entry.to ?? "present"})
                                {entry.reason && <> — {entry.reason}</>}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Records */}
            {coasterRecords.length > 0 && (
                <section>
                    <h2>Records</h2>

                    <ul>
                        {coasterRecords.map(record => (
                            <li key={record.id}>
                                {record.title}
                                {" "}
                                ({formatLabel(record.category)})
                                {" "}
                                {record.yearAwarded}-{record.yearLost}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Timeline */}
            {timeline?.length > 0 && (
                <section>
                    <h2>Timeline</h2>
                    <ul>
                        {timeline.map((event, i) => (
                            <li key={i}>
                                <strong>{event.year}</strong> — {event.title || formatLabel(event.type)}
                                {event.description && <p>{event.description}</p>}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Notes */}
            {coaster.notes && (
                <section>
                    <h2>Notes</h2>
                    <p>{coaster.notes}</p>
                </section>
            )}

            {coaster.rcdbUrl && (
                <p>
                    <a href={coaster.rcdbUrl} target="_blank" rel="noreferrer">
                        View on RCDB
                    </a>
                </p>
            )}
        </article>
    );
}