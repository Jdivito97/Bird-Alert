import React, { useState } from "react";
import LandingPage from "./LandingPage";
import "./Styles.css";
import Navbar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { RegionContext } from "./contexts/region.context";

function App(props) {
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
