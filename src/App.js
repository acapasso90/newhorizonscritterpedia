import React from "react";
import {
    BrowserRouter,Routes,Navigate,Route,
} from "react-router-dom";
import {DisplayCritters} from "./DisplayCritters";
import { MainNav } from "./MainNav";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CritterDetails } from "./CritterDetails/CritterDetails";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainNav />}>
                <Route index element={<Navigate to="fish" replace />} />
                <Route path="fish" element={<DisplayCritters keyword="fish" />} >
                    <Route path=":name" element={<CritterDetails />} />
                </Route>
                <Route path="bug" element={<DisplayCritters keyword="bug"/>} >3
                    <Route path=":name" element={<CritterDetails />} />

                </Route>
                <Route path="deepsea" element={<DisplayCritters keyword="deep sea creature"/>} >
                    <Route path=":name" element={<CritterDetails />} />

                </Route>
                <Route path="*" element={<h1>404: page not found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;