import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelListPage from "./components/pages/TravelListPage.jsx"
import TravelDetailsPage from "./components/pages/TravelDetailsPage.jsx"
import DefaultLayout from "./components/layout/DefaultLayout.jsx"
import ClientDetailsComponent from "./components/common/ClientDetailscomponent.jsx";
//import { trips, clients, guides } from "./models/db_trips.js";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    {/* index = path="/" */}
                    <Route index element={<TravelListPage />} />
                    <Route path=":travelId/" element={<TravelDetailsPage />} />
                    <Route path=":clientId" element={<ClientDetailsComponent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

