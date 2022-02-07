import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { InputBase, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

var smBreakPoint = null;

const Header = () => {
  const theme = useTheme();
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#fefefe",
      },
    },
  });
  smBreakPoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <AppBar position='static' sx={{ backgroundColor: "#4615b2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h5'>Travel Advisor</Typography>
          <Box
            display='flex'
            sx={{
              alignItems: "center",
              gap: 3,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography variant='h6' color='white'>
              Explore new places
            </Typography>
            <form noValidate autoComplete='off'>
              {/* <Autocomplete> */}
              <ThemeProvider theme={customTheme}>
                <TextField
                  id='filled-basic'
                  label='Search'
                  variant='filled'
                  color='primary'
                  size='small'
                  inputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
              </ThemeProvider>
              {/* </Autocomplete> */}
            </form>
          </Box>
        </Toolbar>
      </AppBar>
      {smBreakPoint ? (
        <Box
          display='flex'
          sx={{
            alignItems: "center",
            gap: 3,
            backgroundColor: "#834bff",
            p: 2,
          }}
        >
          <Typography variant='h6' sx={{ color: "white" }}>
            Explore new places
          </Typography>
          <form noValidate autoComplete='off'>
            {/* <Autocomplete> */}
            <ThemeProvider theme={customTheme}>
              <TextField
                id='filled-basic'
                label='Search'
                variant='filled'
                color='primary'
                size='small'
                inputProps={{
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
              />
            </ThemeProvider>
            {/* </Autocomplete> */}
          </form>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
export { smBreakPoint };
