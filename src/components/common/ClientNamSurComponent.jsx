import { trips, guides, clients } from "../../models/db_trips"

export default function ClientNamSurComponent({ clientData }) {
    return (
        <div className={`client-${clientData.id}`}>
            <p>Name: {clientData.firstName}</p>
            <p>Surname: {clientData.lastName}</p>
        </div>
    )
}