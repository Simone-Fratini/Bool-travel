import { trips, clients, guides } from "../../models/db_trips.js"
import TravelDetailComponent from "../common/TravelDetailComponent.jsx"
import ClientNamSurComponent from "../common/clientNamSurComponent.jsx"
import ClientDetailsComponent from "../common/ClientDetailscomponent.jsx"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"


export default function TravelDetailsPage() {
    // recupero id del viaggio
    const { travelId } = useParams();
    //console.log(travelId)
    //console.log(trips[travelId])
    //creo un avariabile di stato per tenere traccia del valore (stringa) scritto nella search bar
    const [searchImputValue, setSearchImputValue] = useState("")
    const [searchedClients, setSearchedClients] = useState([])
    const [fakeTripClients, setFakeTripClients] = useState([])

    // creo la variabile tripClients e le assegno una array vuota


    //definiamo i clienti partecipanti ad un viaggio filtrandoli dal """""data base""""".
    // Alla variave tripClients assegnamo l'array returnata dal filtraggio dei clienti. filter returnerà una array con tutti i clienti aventi il tripId uguale all'id del trip.
    const tripClients = clients.filter((client) => {

        return (client.tripId === trips[travelId].id)
    })
    setFakeTripClients([...tripClients])

    //console.log(tripClients)
    //ora che abbiamo solo i clienti partecipanti al viaggio implementiamo un altro filtraggio che seleziona i clienti in base al valore scritto nella search bar. quest'ulteriore filtraggio returnerà un'arrei contentente soltanto i clienti che nel loro nome o cognome è incluso il valore inserito nella searchbar
    function clientsSearchFilter() {
        if (searchImputValue === "") {
            setSearchedClients(fakeTripClients)
        } else {
            console.log(searchImputValue)
            const tripSearchedClients = tripClients.filter((client) =>
                client.firstName.toLowerCase().includes(searchImputValue.toLowerCase()) ||
                client.lastName.toLowerCase().includes(searchImputValue.toLowerCase())

            );
            console.log(tripSearchedClients)
            setSearchedClients(tripSearchedClients)
            console.log(searchedClients)
        }
        //client.toLowerCase(client.firstName).includes(toLowerCase(searchValue)) ||
        //client.toLowerCase(client.lastName).includes(toLowerCase(searchValue))

        // tripSearchedClients = tripClients.filter((client) => {
        //     return (client.firstName.include(searchImputValue) || client.lastName.include(searchImputValue))

        // })

    }
    useEffect(clientsSearchFilter, [searchImputValue])

    //assegnamo alla variabile di stato il valore definito nella searchbar, cosi ogni volta che il valore della serarchbar cambia avremo un nuovo rendering dei partecipanti ad un viaggio, in questo modo non c'è bisogno di un button per confermare il valore scritto nella searcbar
    function handleChange(event) {
        setSearchImputValue(event.target.value);
        console.log(searchImputValue)
    }


    return (
        <div className="container mx-auto p-4 ">
            <div>
                {/* [travelId - 1] per sincronizzare id e index, che poi inserendo il database useremo direttamente l'index */}
                <TravelDetailComponent tripData={trips[travelId - 1]} guidesData={guides} />
                <TravelDetailComponent tripData={trips[travelId - 1]} guidesData={guides} clientsData={clients}/>
            </div>
            <div>
                <h2>Rubrica Partecipanti</h2>
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            value={searchImputValue}
                            onChange={(e) => { setSearchImputValue(e.target.value) }}
                            required
                        />
                    </div>
                </form>
                {searchedClients.map((client) => {
                    return (
                        <div key={client.id} >
                            <ClientNamSurComponent key={client.id} clientData={client} />
                            <Link to={`/${client.id}`}>Dettaglio cliente</Link>
                            <hr />
                            {/* <ClientDetailsComponent clientData={client} />dare l'equivalente Tailwind di className="d-none" per questo <ClientDetailsComponent />, alterniamo tra la classe "d-none" e la classe "d-block"  grazie ad una logica toggle ogni volta che si clicca il pulsante */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// if (clients.data.tripId === index) {
//     tripClients.push(clients[index])
// } else { }