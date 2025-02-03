import { trips, guides, clients } from "../../models/db_trips.js"
import TravelComponent from "../common/TravelComponent"
import ClientNamSurComponent from "../common/clientNamSurComponent.jsx"
import ClientDetailsComponent from "../common/ClientDetailscomponent.jsx"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';


export default function TravelDetailsPage({ trip, index }) {

    //creo un avariabile di stato per tenere traccia del valore (stringa) scritto nella search bar
    const [searchImputValue, setSearchImputValue] = ""

    // creo la variabile tripClients e le assegno una array vuota
    let tripClients = []

    //definiamo i clienti partecipanti ad un viaggio filtrandoli dal """""data base""""".
    // Alla variave tripClients assegnamo l'array returnata dal filtraggio dei clienti. filter returnerà una array con tutti i clienti aventi il tripId uguale all'id del trip.
    tripClients = clients.filter((client) => {
        return (client.data.tripId === index)
    })

    //ora che abbiamo solo i clienti partecipanti al viaggio implementiamo un altro filtraggio che seleziona i clienti in base al valore scritto nella search bar. quest'ulteriore filtraggio returnerà un'arrei contentente soltanto i clienti che nel loro nome o cognome è incluso il valore inserito nella searchbar
    function clientFilter(tripClients) {
        tripClients = tripClients.filter((client) => {
            return (client.firstName.include(searchImputValue) || client.lastName.include(searchImputValue))
        })
    }

    //assegnamo alla variabile di stato il valore definito nella searchbar, cosi ogni volta che il valore della serarchbar cambia avremo un nuovo rendering dei partecipanti ad un viaggio, in questo modo non c'è bisogno di un button per confermare il valore scritto nella searcbar
    function handleChange(event) {
        setSearchImputValue(event.target.value);
    }


    return (
        <main>
            <div className="one-trip">
                <TravelComponent tripData={trip[index]} />
            </div>
            <div>
                <h2>Rubrica Partecipanti</h2>
                <form className="max-w-md mx-auto">
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            value={searchImputValue}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </form>
                {tripClients.map((client) => {
                    return (
                        <div key={client.id} >
                            <ClientNamSurComponent key={client.id} clientData={client} />
                            <Link to={`/${client.id}`}>Dettaglio cliente</Link>
                            <ClientDetailsComponent clientData={client} />{/* dare l'equivalente Tailwind di className="d-none" per questo <ClientDetailsComponent />, alterniamo tra la classe "d-none" e la classe "d-block"  grazie ad una logica toggle ogni volta che si clicca il pulsante */}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

// if (clients.data.tripId === index) {
//     tripClients.push(clients[index])
// } else { }