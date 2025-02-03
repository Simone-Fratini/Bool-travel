import TravelComponent from "../common/TravelComponent";
import { trips, clients } from "../../models/db_trips.js";
import { Link } from "react-router-dom";

export default function TravelListPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Explore Our Trips
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <Link
            key={trip.id}
            to={`/${trip.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
          >
            <TravelComponent tripData={trip} index={index} clientsData={clients} />
          </Link>
        ))}
      </div>
    </div>
  );
}
