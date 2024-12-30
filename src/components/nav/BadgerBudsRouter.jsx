import { BrowserRouter, Route, Routes } from "react-router-dom";

import BadgerBuds from "../BadgerBuds";
import BadgerBudsLanding from "./pages/BadgerBudsLanding"
import BadgerBudsAdoptable from "./pages/BadgerBudsAdoptable"
import BadgerBudsBasket from "./pages/BadgerBudsBasket"
import BadgerBudsNoMatch from "./pages/BadgerBudsNoMatch"


// In BadgerBudsRouter.jsx, add routes so that...
// Navigating to /available-cats routes to BadgerBudsAdoptable.jsx
// Navigating to /basket routes to BadgerBudsBasket.jsx
// Navigating to any other route (e.g. /bogus, /hello-123, anything but the valid pages) routes to BadgerBudsNoMatch.jsx

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<BadgerBuds />}>
                <Route index element={<BadgerBudsLanding />} />
                <Route path="available-cats" element={<BadgerBudsAdoptable />} />
                <Route path="basket" element={<BadgerBudsBasket />} />
                <Route path="*" element={<BadgerBudsNoMatch />} />
            </Route>
        </Routes>
    </BrowserRouter>
}