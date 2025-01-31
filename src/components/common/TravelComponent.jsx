//import { trips, guides, clients } from "../../models/db_trips"

export default function TravelComponent({ tripData }) {
    return (
        <div className="one-trip">
            <div>
                <h2>{tripData.tripName}</h2>
                <h3>{tripData.location}</h3>
            </div>
            <div>
                <p>Starting Date: {tripData.startDate}</p>
                <p>Ending Date: {tripData.endDate}</p>
            </div>
        </div>

    )
}