import { trips, guides, clients } from "../../models/db_trips.js"
import TravelComponent from "../common/TravelComponent"
import ClientNamSurComponent from "../common/clientNamSurComponent.jsx"


export default function TravelDetailsPage({ trip, index }) {

    let tripClients = []

    if (clients.data.tripId === index) {
        tripClients.push(clients[index])
    } else { }

    return (
        <main>
            <div className="one-trip">
                <TravelComponent tripData={trip[index]} />
            </div>

            <div>
                <h2>Rubrica Partecipanti</h2>
                {tripClients.map((client) => {
                    return (
                        <ClientNamSurComponent key={client.id} />
                    )
                })}
            </div>
        </main>
    )
}