import { BrowserRouter, Router, Route } from "react-router-dom";
import TravelListPage from "./components/pages/TravelListPage.jsx"
import TravelDetailsPage from "./components/pages/TravelDetailsPage.jsx"
import DeafultLayout from "./components/layout/DeafultLayout.jsx"
function App() {
    return (
        <BrowserRouter>
            <Router>
                <Route element={<DeafultLayout />}>
                    <Route path="/">
                        <Route index element={<TravelListPage />} />
                        <Route path=":id" element={<TravelDetailsPage />} />
                    </Route>
                </Route>
            </Router>
        </BrowserRouter>
    );
}

export default App;
