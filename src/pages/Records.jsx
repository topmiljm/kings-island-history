import records from "../data/records.json";
import coasters from "../data/coasters.json";

export default function Records() {
    const stillHeld = records.filter(r => r.stillHeld);
    const historical = records.filter(r => !r.stillHeld);

    const coasterName = (id) =>
        coasters.find(c => c.id === id)?.currentName ?? id;

    return (
        <div>
            <h1>Records</h1>

            <section>
                <h2>Current Records</h2>
                <ul>
                    {stillHeld.map(r => (
                        <li key={r.id}>
                            <strong>{coasterName(r.coasterId)}</strong> — {r.title} ({r.yearAwarded})
                            <p>{r.notes}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Historical Records</h2>
                <ul>
                    {historical.map(r => (
                        <li key={r.id}>
                            <strong>{coasterName(r.coasterId)}</strong> — {r.title} ({r.yearAwarded}–{r.yearLost})
                            <p>{r.notes}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}