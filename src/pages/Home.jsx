import { useState } from "react";
import areas from "../data/areas.json";

export default function Home() {

  const [previewImage, setPreviewImage] = useState(null);

  const activeAreas = areas
    .filter(a => a.status === "active" && a.id !== "camp-snoopy")
    .sort((a, b) => a.opened - b.opened);

  const retiredAreas = areas
    .filter(a => a.status === "retired")
    .sort((a, b) => a.opened - b.opened);

  return (
    <div className="home">
      <img
        className="home-img"
        src="public/images/ki-coaster.png"
      >
      </img>
      <h2>About Kings Island</h2>
      <p>
        Kings Island is a premier amusement and water park located in Mason, Ohio, near Cincinnati.
        Since opening in 1972, it has become one of the Midwest's most popular family destinations, featuring world-class roller coasters, family attractions, live entertainment, and the Soak City Water Park.
        Known for iconic rides like The Beast and Orion, Kings Island is one of the largest and most famous seasonal amusement parks in the United States.
        As of 2024, the park is operated by Six Flags Entertainment Corporation.
      </p>
      <figure>
        <img
          className="park-map-img"
          src="public/images/ki park map-2.png"
          onClick={setPreviewImage}
        >
        </img>
        <figcaption>Kings Island Park Map</figcaption>
      </figure>

      <h3>Themed Areas</h3>
      <p>
        Kings Island currently features {activeAreas.length} distinct themed areas, plus Soak City Water Park.
        With the exception of International Street and Soak City, each themed area contains roller coasters:
      </p>
      <ul className="home-area-list">
        {activeAreas.map(area => (
          <li key={area.id}>
            <strong>{area.name}</strong> ({area.opened}-present)
            <p>{area.description}</p>
          </li>
        ))}
      </ul>

      <h3>Area History</h3>
      <p>
        Several of today's areas grew out of earlier sections of the park that have since been
        rethemed or retired:
      </p>
      <ul className="home-area-list-retired">
        {retiredAreas.map(area => {
          const successor = areas.find(a => a.id === area.successorAreaId);
          return (
            <li key={area.id}>
              <strong>{area.name}</strong> ({area.opened}-{area.closed})
              <p>
                {area.description}
                {successor && (
                  <> Became <strong>{successor.name}</strong>.</>
                )}
              </p>
            </li>
          );
        })}
      </ul>

      <h3>Explore the History of Kings Island's Roller Coasters above...</h3>
      {previewImage && (
        <div className="image-preview-overlay" onClick={() => setPreviewImage(null)}>
          <img src="public/images/ki park map-2.png" alt="preview" className="image-preview-large" />
        </div>
      )}
    </div>
  );
}
