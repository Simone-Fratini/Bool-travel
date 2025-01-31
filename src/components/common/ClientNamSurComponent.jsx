
import { trips, guides, clients } from "../../models/db_trips"

export default function ClientNamSurComponent() {
    return (
        <div className="one-client">
            <div>
                <p>Name: {clients.firstName}</p>
                <p>Surname: {clients.lastName}</p>
            </div>
        </div>
    )
}