import { BrowserRouter, Router, Route } from "react-router-dom";
import TravelListPage from "./components/pages/TravelListPage.jsx"
import TravelDetailsPage from "./components/pages/TravelDetailsPage.jsx"
import DefaultLayout from "./components/layout/DefaultLayout.jsx"

export default function App() {
    return (
        <BrowserRouter>
            <Router>
                <Route element={<DefaultLayout />}>
                    <Route path="/">
                        <Route index element={<TravelListPage />} />
                        <Route path=":id" element={<TravelDetailsPage />} />
                    </Route>
                </Route>
            </Router>
        </BrowserRouter>
    );
}

