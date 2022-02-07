import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating, Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { smBreakPoint } from "../Header/Header";

const Map = () => {
  //deafult coordinates
  const coordinate = { lat: 0, lng: 0 };
  return (
    <>
      <Box sx={{ height: { xs: "250%", md: "100%" }, width: "100%" }}>
        {/* google map setup */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwEt1N03pvidGzSKG6FLQDbsDRHG34_pQ" }}
          defaultCenter={coordinate}
          center={coordinate}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </Box>
    </>
  );
};

export default Map;
