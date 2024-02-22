import Hero from "./sections/Hero";
import Drivers from "./sections/Drivers";
import Stats from "./sections/Stats";
import Benefits from "./sections/Benefits";
import Form from "./sections/Form";
import Footer from "./sections/Footer";
import Sidebar from "./sections/Sidebar";
import Nav from "./components/Nav";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero />
      <Drivers />
      <Stats />
      <Benefits />
      <Form />
      <Footer />
    </div>
  )
}

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 23.3168855,
  lng: 85.3758839,
};
const center2 = {
  lat: 23.3178855,
  lng: 85.3778839,
};
const center3 = {
  lat: 23.3158855,
  lng: 85.3768839,
};
const center4 = {
  lat: 23.3168855,
  lng: 85.3748839,
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA8PrGz85IHKn1WNvgkMKYWhur0HkdYEmU',
    libraries,
  });

  function Error() {
    console.log(loadError);
    return <div>Error loading maps</div>;
  }

  function Map(){
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15.2}
          center={center}
        >
          <Marker position={center} label={{text: "1", color: "#fff", fontWeight: "600"}}/>
          <Marker position={center2} label={{text: "2", color: "#fff", fontWeight: "600"}}/>
          <Marker position={center3} label={{text: "3", color: "#fff", fontWeight: "600"}}/>
          <Marker position={center4} label={{text: "4", color: "#fff", fontWeight: "600"}}/>
        </GoogleMap>
        
        <Sidebar />
      </div>
    );
  }

  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={(isLoaded)?Map():Error()}
                />
            </Routes>
        </Router>
  );

}

export default App;
