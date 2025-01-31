
import TravelComponent from "../common/TravelComponent"
import { trips } from "../../models/db_trips.js"



export default function TravelListPage() {

    return (
        <>
            {
                trips.map((trip) => {
                    return (
                        <div key={trip.id}>
                            <TravelComponent tripData={trip} />
                            <button>Dettaglio</button>
                            <hr />
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}



