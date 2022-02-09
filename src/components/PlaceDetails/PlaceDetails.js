import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import restoImage from "../../images/restaurant.jpg";

const PlaceDetails = ({ place }) => {
  return (
    <Card elevation={6}>
      <CardMedia
        sx={{ height: { xs: 250, md: 350 } }}
        image={place.photo ? place.photo.images.large.url : restoImage}
        title={place.name}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.price_level}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.ranking}
          </Typography>
        </Box>
        {place.awards?.map((award) => {
          return (
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              my={1}
            >
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant='subtitle2' color='textSecondary'>
                {award.display_name}
              </Typography>
            </Box>
          );
        })}
        {place.cuisine?.map(({ name }) => {
          return (
            <Chip
              key={name}
              size='small'
              label={name}
              sx={{ marginRight: "5px", marginTop: "5px" }}
            />
          );
        })}
        {place.address && (
          <Box display='flex' mt={1.5} gap={0.6}>
            <LocationOnIcon />
            <Typography variant='subtitle2' gutterBottom color='textSecondary'>
              {place.address}
            </Typography>
          </Box>
        )}
        {place.phone && (
          <Box display='flex' mt={1} gap={0.6}>
            <PhoneIcon />
            <Typography variant='subtitle2' gutterBottom color='textSecondary'>
              {place.phone}
            </Typography>
          </Box>
        )}
        <CardActions>
          {place.web_url && (
            <Button
              size='small'
              color='primary'
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip advisor
            </Button>
          )}
          {place.website && (
            <Button
              size='small'
              color='primary'
              onClick={() => window.open(place.website, "_blank")}
            >
              website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
