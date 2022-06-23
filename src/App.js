import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import DisplayBugs from "./DisplayBugs";
import { MainNav } from "./MainNav";
import { CritterForm } from "./CritterForm";

function App() {

return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Navigate to="fish" replace />} />
          <Route path="fish" element={<DisplayBugs keyword="fish" />}>
            <Route path=":name" element={<CritterForm />} />
          </Route>
          <Route path="bugs" element={<DisplayBugs keyword="bug"/>}>
            <Route path=":name" element={<CritterForm />} />
          </Route>
          <Route path="deepsea" element={<DisplayBugs keyword="deep sea creature"/>}>
            <Route path=":name" element={<CritterForm />} />
          </Route>
          <Route path="*" element={<h1>404: page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;