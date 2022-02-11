import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating, Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { smBreakPoint } from "../Header/Header";
import restoImage from "../../images/restaurant.jpg";

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
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
        >
          {places?.map((place, i) => {
            return (
              <Box
                key={i}
                sx={{}}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
              >
                {smBreakPoint ? (
                  <LocationOnOutlinedIcon color='primary' fontSize='large' />
                ) : (
                  <Paper elevation={3} sx={{}}>
                    <Typography sx={{}} variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <Box
                      component='img'
                      src={
                        place.photo ? place.photo.images.large.url : restoImage
                      }
                      alt={place.name}
                      sx={{}}
                    ></Box>
                    <Rating
                      size='small'
                      value={Number(place.rating)}
                      readOnly
                    />
                  </Paper>
                )}
              </Box>
            );
          })}
        </GoogleMapReact>
      </Box>
    </>
  );
};

export default Map;
