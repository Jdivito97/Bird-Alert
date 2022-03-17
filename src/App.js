import LandingPage from "./LandingPage";
import "./Styles.css";
import Navbar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<TravelExploreIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <LandingPage />
    </div>
  );
}

export default App;
