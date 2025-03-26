import { Box, useMediaQuery, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Gulele",
    position: [9.0417, 38.7464],
    description:
      "Northern subcity of Addis Ababa known for its botanical garden",
  },
  {
    name: "Yeka",
    position: [9.0667, 38.8],
    description:
      "Subcity containing the African Union headquarters and Entoto Hills",
  },
  {
    name: "Kolfe Keranio",
    position: [9.0167, 38.7167],
    description: "Western subcity with residential neighborhoods",
  },
  {
    name: "Arada (Addis Ketema)",
    position: [9.0333, 38.75],
    description: "Historic district with Piazza area and traditional markets",
  },
  {
    name: "Yidnekachew Beshawered (Yazda)",
    position: [9.016, 38.77],
    description: "Commercial area in Kirkos Subcity",
  },
  {
    name: "Bole",
    position: [8.9833, 38.8],
    description: "Upscale district with Bole International Airport",
  },
  {
    name: "Nifas Silk-Lafto",
    position: [9.0333, 38.7167],
    description: "Residential and commercial subcity in western Addis",
  },
  {
    name: "Akaki-Kality",
    position: [8.8833, 38.7833],
    description: "Industrial and manufacturing zone in southern Addis",
  },
  {
    name: "Meskel Square",
    position: [9.0189, 38.7613],
    description: "Major public square for events and celebrations",
  },
  {
    name: "National Museum",
    position: [9.0385, 38.7584],
    description: "Home of the famous Lucy fossil and Ethiopian artifacts",
  },
  {
    name: "Unity Park",
    position: [9.0364, 38.7523],
    description: "Grand recreational park at the Grand Palace compound",
  },
  {
    name: "Bole International Airport",
    position: [8.9779, 38.7993],
    description: "Main international airport hub of Ethiopia",
  },
  {
    name: "Addis Ababa University",
    position: [9.0444, 38.7595],
    description: "Main campus of Ethiopia's premier university",
  },
  {
    name: "Entoto Natural Park",
    position: [9.1167, 38.8167],
    description: "Scenic mountain park overlooking the city",
  },
  {
    name: "Mercato",
    position: [9.0167, 38.7333],
    description: "Africa's largest open-air market",
  },
  {
    name: "Bole Kazanchis",
    position: [8.9964, 38.7867],
    description: "Commercial area near Bole with government offices",
  },
  {
    name: "Arat Kilo",
    position: [9.0336, 38.76],
    description: "Historic square and major intersection",
  },
  {
    name: "Ferencay (French Legation)",
    position: [9.0369, 38.7564],
    description: "Historic French diplomatic compound",
  },
  {
    name: "Entoto Kidus Pawlos (St. Paul's)",
    position: [9.0833, 38.8167],
    description: "Church in Entoto area",
  },
  {
    name: "Paster (Posta Bet)",
    position: [9.0278, 38.7508],
    description: "Central post office area",
  },
  {
    name: "British Embassy",
    position: [9.0342, 38.7639],
    description: "UK diplomatic mission",
  },
  {
    name: "Megenagna",
    position: [9.0167, 38.8],
    description: "Major traffic hub and commercial area",
  },
  {
    name: "Semit (Cement Factory)",
    position: [8.95, 38.7667],
    description: "Industrial area in southern Addis",
  },
  {
    name: "Gerji",
    position: [9.0167, 38.8167],
    description: "Residential and business district near Bole",
  },
  {
    name: "22 Mazoriya (22 Roundabout)",
    position: [9.0167, 38.7833],
    description: "Major traffic circle in Kirkos subcity",
  },
  {
    name: "18 Mazoriya (18 Roundabout)",
    position: [9.0, 38.7833],
    description: "Traffic circle near Bole area",
  },
  {
    name: "Haile Garment",
    position: [8.9833, 38.7833],
    description: "Industrial area with textile factories",
  },
  {
    name: "Bole Michael",
    position: [8.9833, 38.8167],
    description: "Area near Bole Airport with shopping centers",
  },
  {
    name: "Gelan",
    position: [8.8333, 38.8167],
    description: "Industrial zone and new development area",
  },
  {
    name: "Tulu Dimtu",
    position: [9.0667, 38.7667],
    description: "Residential neighborhood in eastern Addis",
  },
  {
    name: "Saris",
    position: [9.0333, 38.8333],
    description: "Suburban area known for Saris Abo",
  },
  {
    name: "Abo (Saris Abo)",
    position: [9.0417, 38.8417],
    description: "Popular recreational area with natural springs",
  },
  {
    name: "Jemo",
    position: [9.0, 38.7667],
    description: "Dense residential and commercial district",
  },
];

const createCustomIcon = () =>
  new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const AddisAbabaMap = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const centerPosition = [9.005401, 38.763611];

  return (
    <Box width="100%" mt={10} px={isMobile ? 0 : 4}>
      <Box
        as={motion.div}
        style={{ height: "500px", width: "100%", borderRadius: "8px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <MapContainer
          center={centerPosition}
          zoom={13}
          style={{ height: "95%", width: "100%", borderRadius: "8px" }}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              icon={createCustomIcon()}
            >
              <Popup>
                <Box p={2}>
                  <Text fontWeight="bold">{location.name}</Text>
                  <Text fontSize="sm" mt={1}>
                    {location.description}
                  </Text>
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default AddisAbabaMap;
