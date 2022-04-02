import React, { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import NavItem from "./components/Navbar/NavItem";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { RegionContext } from "./contexts/region.context";

function App() {
  const [region, setRegion] = useState("");
  return (
    <div className="App">
      <RegionContext.Provider value={{ region, setRegion }}>
        <Navbar>
          <NavItem icon={<TravelExploreIcon />}>
            <DropdownMenu />
          </NavItem>
        </Navbar>
        <LandingPage />
      </RegionContext.Provider>
    </div>
  );
}

export default App;
