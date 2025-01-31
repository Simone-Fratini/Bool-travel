import TravelComponent from "../common/TravelComponent"
import { trips, guides, clients } from "../../models/db_trips"

export default function TravelListPage() {
    return (
        trips.map((trip) => {
            return <TravelComponent tripData={trip} />
        })
    )
}