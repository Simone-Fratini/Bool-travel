import { trips, guides, clients } from "../../models/db_trips"

export default function ClientNamSurComponent({ clientData }) {
    return (
        <div className={`client-${clientData.data.id}`}>
            <p>Name: {clientData.data.firstName}</p>
            <p>Surname: {clientData.data.lastName}</p>
        </div>
    )
}