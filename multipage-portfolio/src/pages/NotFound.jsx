import { Box, Typography } from "@mui/material";
import notFoundImg from '../assets/404.jpg';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography>
        <img
          src={notFoundImg}
          alt="404 Not Found"
          style={{ width: "500px", marginBottom: "20px" }}
        />
      </Typography>
    </Box>
  );
}
export default NotFound;