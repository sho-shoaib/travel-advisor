import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating, Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { smBreakPoint } from "../Header/Header";

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  return (
    <>
      <Box sx={{ height: { xs: "70vh", md: "94vh" }, width: "100%" }}>
        {/* google map setup */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwEt1N03pvidGzSKG6FLQDbsDRHG34_pQ" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        ></GoogleMapReact>
      </Box>
    </>
  );
};

export default Map;
