import { Box, useMediaQuery, Text, Flex } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { locations } from "./Locations";


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

const AddisAbabaMap: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const centerPosition: [number, number] = [9.005401, 38.763611];

  return (
    <Box width="100%" mt={10} px={isMobile ? 0 : 4}>
      <Box
        as={motion.div}
        style={{ height: "500px", width: "100%", borderRadius: "8px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition="0.3s ease"
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
                  <Flex flexDir={"row"} gap={2}>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      bg="brand.100"
                      w="50px"
                      h="50px"
                      flexShrink={0}
                      position="relative"
                    >
                      <Text fontSize="xl" align={"center"} fontWeight="bold" color="white">
                        {location.number}
                      </Text>
                    </Flex>
                    <Text fontWeight="bold" size={"3xl"}>{location.name}</Text>
                  </Flex>
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
