
import TravelComponent from "../common/TravelComponent"
import { trips, guides, clients } from "../../models/db_trips"

export default function TravelListPage() {
    return (
        <main>
            {trips.map((trip) => {
                return <TravelComponent key={trip.id} tripData={trip} />
            })}
        </main>
    )
}



