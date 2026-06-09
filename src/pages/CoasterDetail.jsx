import { useParams } from "react-router-dom";
import coasters from "../data/coasters.json";

export default function CoasterDetail() {
    const { slug } = useParams();

    const coaster = coasters.find(
        c => c.slug === slug
    );

    if (!coaster) {
        return <h1>Coaster not found</h1>;
    }

    return (
        <>
            <h1>{coaster.name}</h1>

            <div>Opened: {coaster.opened}</div>
            <div>Height: {coaster.height} ft</div>
            <div>Speed: {coaster.speed} mph</div>
        </>
    );
}