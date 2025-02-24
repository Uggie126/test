import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./About.css"

const mapContainerStyle = {
  width: "95%",
  height: "320px",
};

const center = {
  lat: 54.67618, // Spiritus Bar Latitude
  lng: 25.28872,  // Spiritus Bar Longitude
};

// Dark Mode Style (JSON style)
const darkModeStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#212121" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#212121" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#383838" }],
  },
];

const handleMarkerClick = () => {
    const confirmRedirect = window.confirm("Go to Maps?");
    if (confirmRedirect) {
        window.location.href = 'https://maps.app.goo.gl/VK2nwfscf1KdAk9Q6';
    } else {
        console.log("User cancelled the redirect.");
    }
};

const About = () => {
  return (
    <div className="map-container">
    <LoadScript googleMapsApiKey="AIzaSyBF4PgzFDwVhVwIdYhKmtYTosiopYNQgLs">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={18}  // You can adjust zoom level to fit your desired view
        options={{ styles: darkModeStyle }}
        >
        <MarkerF position={center}
        onClick={handleMarkerClick} 
        />
        </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default About;
