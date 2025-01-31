//import { trips, guides, clients } from "../../models/db_trips"

export default function TravelComponent({ tripData }) {
    return (
        <div>
            <div>
                <h2>{tripData.tripName}</h2>
                <h3>{location}</h3>
            </div>
            <div>
                <p>Starting Date: {tripData.startDate}</p>
                <p>Ending Date: {tripData.startDate}</p>
            </div>
        </div>
    )
}