//import { trips, guides, clients } from "../../models/db_trips"

export default function TravelComponent({ tripData }) {

    return (

        <div key={tripData.id} className="one-trip-in-list">
            <div>
                <img src={tripData.img} alt="trip-IMG" className="trip-IMG" />
            </div>
            <div>
                <div>
                    <h2>{tripData.tripName}</h2>
                    <h3>{tripData.location}</h3>
                </div>
                <div>
                    <p>Starting Date: {tripData.startDate}</p>
                    <p>Ending Date: {tripData.endDate}</p>
                </div>
            </div>
        </div>
    )
}