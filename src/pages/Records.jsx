import records from "../data/records.json";
import coasters from "../data/coasters.json";

export default function Records() {
    const stillHeld = records.filter(r => r.stillHeld);
    const historical = records.filter(r => !r.stillHeld);

    const coasterName = (id) =>
        coasters.find(c => c.id === id)?.currentName ?? id;

    return (
        <div>
            <div className="records-page">
                <h1>Records</h1>

                <section>
                    <h2>Current Records <img src="/images/award-2.png"></img></h2>
                    <ul className="records-page-list">
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
                    <ul className="records-page-list">
                        {historical.map(r => (
                            <li key={r.id}>
                                <strong>{coasterName(r.coasterId)}</strong> — {r.title} ({r.yearAwarded}–{r.yearLost})
                                <p>{r.notes}</p>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
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