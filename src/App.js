import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ width: "100%", height: "94vh" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
