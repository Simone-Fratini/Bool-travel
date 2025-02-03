import { trips, clients } from "../../models/db_trips.js";
import TravelComponent from "../common/TravelComponent";
import ClientNamSurComponent from "../common/clientNamSurComponent.jsx";
import ClientDetailsComponent from "../common/ClientDetailscomponent.jsx";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function TravelDetailsPage() {
  const { travelId } = useParams();
  const tripId = parseInt(travelId, 10); // Converti travelId in numero
  const tripData = trips.find(trip => trip.id === tripId); // Trova il viaggio corretto

  if (!tripData) {
    return <h2 className="text-center text-red-600 text-xl">Viaggio non trovato</h2>;
  }

  const [searchImputValue, setSearchImputValue] = useState(""); // Stato corretto

  // Filtriamo i clienti che partecipano al viaggio
  const tripClients = clients.filter(client => client.tripId === tripId);

  // Ulteriore filtraggio in base alla search bar
  const filteredClients = tripClients.filter(client => 
    client.firstName.toLowerCase().includes(searchImputValue.toLowerCase()) ||
    client.lastName.toLowerCase().includes(searchImputValue.toLowerCase())
  );

  return (
    <main className="container mx-auto p-6">
      <div className="one-trip">
        <TravelComponent tripData={tripData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rubrica Partecipanti</h2>
        
        <form className="max-w-md mx-auto">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cerca partecipanti..."
            value={searchImputValue}
            onChange={(e) => setSearchImputValue(e.target.value)}
          />
        </form>

        <div className="mt-4 space-y-4">
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <div key={client.id} className="p-4 bg-white rounded-lg shadow-md">
                <ClientNamSurComponent clientData={client} />
                <Link
                  to={`/${client.id}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Dettaglio cliente
                </Link>
                <ClientDetailsComponent clientData={client} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">Nessun partecipante trovato.</p>
          )}
        </div>
      </div>
    </main>
  );
}
