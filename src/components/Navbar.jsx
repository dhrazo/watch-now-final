import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utilities/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Box>
      <Typography variant="h3" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      <span style={{ color: '#f7efef' }}>Watch</span>
        <span style={{ color: "#FC1503" }}>Now</span>
      </Typography>
    </Box>
    <SearchBar />
  </Stack>
);

export default Navbar;
