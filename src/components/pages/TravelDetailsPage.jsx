import { trips, clients, guides } from "../../models/db_trips.js"
import TravelDetailComponent from "../common/TravelDetailComponent.jsx"
import { useParams } from 'react-router-dom';


export default function TravelDetailsPage() {

    const { travelId } = useParams();

    return (
        <div className="container mx-auto p-4 ">
            <div>
                {/* [travelId - 1] per sincronizzare id e index, che poi inserendo il database useremo direttamente l'index */}
                <TravelDetailComponent tripData={trips[travelId - 1]} guidesData={guides} clientsData={clients} />
            </div>
        </div>
    )
}
