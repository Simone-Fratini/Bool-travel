import { trips, guides, clients } from "../../models/db_trips.js"
import TravelComponent from "../common/TravelComponent"
import ClientNamSurComponent from "../common/clientNamSurComponent.jsx"
import ClientDetailsComponent from "../common/ClientDetailscomponent.jsx"
import { Link } from "react-router-dom"


export default function TravelDetailsPage({ trip, index }) {

    let tripClients = []
    tripClients = clients.filter((client) => {
        return (client.data.tripId === index)
    })
    // if (clients.data.tripId === index) {
    //     tripClients.push(clients[index])
    // } else { }

    return (
        <main>
            <div className="one-trip">
                <TravelComponent tripData={trip[index]} />
            </div>
            <div>
                <h2>Rubrica Partecipanti</h2>

                {tripClients.map((client) => {
                    return (
                        <div key={client.id} >
                            <ClientNamSurComponent key={client.id} clientData={client} />
                            <Link to={`/${id}`}>Dettaglio cliente</Link>
                            <ClientDetailsComponent clientData={client} />{/* dare l'equivalente Tailwind di className="d-none" per questo <ClientDetailsComponent />, alternata da un className="d-block" grazie ad una logica toggle ogni volta che si clicca il pulsante */}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}