
import TravelComponent from "../common/TravelComponent"
import { trips } from "../../models/db_trips.js"
import { Link } from "react-router-dom"



export default function TravelListPage() {

    return (
        <>
            {
                trips.map((trip, index) => {
                    return (
                        <div key={trip.id}>
                            <TravelComponent tripData={trip} index={index} />
                            <Link to={`/${id}`}>Dettaglio viaggio</Link>
                            <hr />
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}



