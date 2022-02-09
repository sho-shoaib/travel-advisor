import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Container,
} from "@mui/material";
import { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  return (
    <>
      <Container
        sx={{
          pt: 2,
          pb: 2,
          maxHeight: { xs: "100vh", md: "90vh" },
        }}
      >
        <Typography variant='h4' sx={{ mb: 3 }}>
          Restaurants, hotels, and attractions around you
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 5 }}>
          <FormControl fullWidth>
            <InputLabel id='type'>Type</InputLabel>
            <Select
              labelId='type'
              value={type}
              label='type'
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='rating'>Rating</InputLabel>
            <Select
              labelId='rating'
              value={rating}
              label='rating'
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ maxHeight: { xs: "60vh", md: "60vh" }, overflowY: "auto" }}
        >
          {places?.map((place, i) => {
            return (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default List;
