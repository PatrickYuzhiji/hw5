import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import BadgerBudsNavbar from "./nav/BadgerBudsNavbar";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";
import SavedBudsDataContext from "../contexts/SavedBudsDataContext";
import AdoptedBudsDataContext from "../contexts/AdoptedBudsDataContext";

export default function BadgerBuds() {

    const sessionBuds = sessionStorage.getItem("savedBuds");
    const sessionAdoptedBuds = sessionStorage.getItem("adoptedBuds");

    const [buds, setBuds] = useState([]);
    const [savedBuds, setSavedBuds] = useState(sessionBuds? sessionBuds : []);
    const [commitBuds, setCommitBuds] = useState(sessionAdoptedBuds? sessionAdoptedBuds : []);
    

    useEffect(() => {
        fetch('https://cs571.org/rest/f24/hw5/buds', {
            headers: {
                "X-CS571-ID": "bid_98c5657e8b78dd46d95d3bfc60ab9ce817f77ae20fbae7eefdf042a344e41552"
            }
        })
            .then(res => res.json())
            .then(cats => {
                setBuds(cats)
            })
    }, []);

    console.log(buds)

    return <div>
        <BadgerBudsNavbar />
        <div style={{ margin: "1rem" }}>
            <BadgerBudsDataContext.Provider value={[buds, setBuds]}>
            <SavedBudsDataContext.Provider value={[savedBuds, setSavedBuds]}>
            <AdoptedBudsDataContext.Provider value={[commitBuds, setCommitBuds]}>
            <Outlet />
            </AdoptedBudsDataContext.Provider>
            </SavedBudsDataContext.Provider>
            </BadgerBudsDataContext.Provider>
        </div>
    </div>
}