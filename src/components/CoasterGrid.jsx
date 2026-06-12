import CoasterCard from "./CoasterCard";

export default function CoasterGrid({
  coasters,
  areas,
  manufacturers
}) {
  return (
    <div className="coaster-grid">
      {coasters.map((coaster) => {
        const area = areas.find(
          a => a.id === coaster.currentAreaId
        );

        const manufacturer = manufacturers.find(
          m => m.id === coaster.manufacturerId
        );

        return (
          <CoasterCard
            key={coaster.id}
            coaster={coaster}
            area={area}
            manufacturer={manufacturer}
          />
        );
      })}
    </div>
  );
}