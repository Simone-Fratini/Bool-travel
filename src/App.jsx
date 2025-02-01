import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelListPage from "./components/pages/TravelListPage.jsx"
import TravelDetailsPage from "./components/pages/TravelDetailsPage.jsx"
import DefaultLayout from "./components/layout/DefaultLayout.jsx"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    {/* index = path="/" */}
                    <Route path="/" element={<TravelListPage />}>
                        <Route path=":id" element={<TravelDetailsPage />}>
                            <Route path=":id" element={<TravelDetailsPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

