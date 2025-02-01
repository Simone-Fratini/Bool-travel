
import TravelComponent from "../common/TravelComponent"
import { trips } from "../../models/db_trips.js"



export default function TravelListPage() {

    return (
        <>
            {
                trips.map((trip, index) => {
                    return (
                        <div key={trip.id}>
                            <TravelComponent tripData={trip} index={index} />
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



