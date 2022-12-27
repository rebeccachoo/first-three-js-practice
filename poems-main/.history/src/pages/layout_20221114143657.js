import { Outlet, Link } from "react-router-dom";
import { Box, Grid } from "@mui/material/";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Box id="topBox" sx={{ backgroundColor: "#001829 " }}>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <Grid container>
            <Grid
              item
              md={8}
              sm={12}
              sx={{
                fontSize: "22px",
                p: 3,
                // border: "1px solid white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ cursor: "pointer" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ReadPoems
                </motion.div>
              </Box>{" "}
              <span style={{ paddingLeft: "10px", color: "grey" }}>|</span>{" "}
              <span style={{ fontSize: "13px", paddingLeft: "10px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Emotional Proficiency
                </motion.div>
              </span>
            </Grid>
            <Grid
              item
              md={4}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box>Random</Box>
              <Box>Donate</Box>
              <Box>Login</Box>
            </Grid>
          </Grid>
        </nav>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
