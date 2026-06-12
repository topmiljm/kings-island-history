export default function CoasterStats({ coasters }) {
  const operating = coasters.filter(
    c => c.status === "operating"
  ).length;

  const defunct = coasters.filter(
    c => c.status !== "operating"
  ).length;

  const wood = coasters.filter(
    c => c.classification.material === "wood"
  ).length;

  const steel = coasters.filter(
    c => c.classification.material === "steel"
  ).length;

  return (
    <div className="coaster-stats">
      <div>Total: {coasters.length}</div>
      <div>Operating: {operating}</div>
      <div>Defunct: {defunct}</div>
      <div>Wood: {wood}</div>
      <div>Steel: {steel}</div>
    </div>
  );
}