import { BrowserRouter, Router, Route } from "react-router-dom";
import TravelListPage from "./pages/TravelListPage.jsx"
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<TravelListPage />} />

            </Router>
        </BrowserRouter>
    );
}

export default App;
