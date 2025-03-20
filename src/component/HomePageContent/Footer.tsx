import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Footer.css";

export const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const navigateToPage = (path: string) => {
    router.push(path); // Push to the new route
  };

  return (
    <Box
      className="footer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="20px"
    >
      {/* Left Section with Buttons */}
      <Box className="footer-left" display="flex" gap="15px">
        <Button
          variant="text"
          className="footer-button"
          sx={{ color: "#fff" }}
          onClick={() => navigateToPage("/privacy-policy")} // Navigate to Privacy Policy page
        >
          Privacy Policy
        </Button>
        <Button
          variant="text"
          className="footer-button"
          sx={{ color: "#fff" }}
          onClick={() => navigateToPage("/terms-and-conditions")} // Navigate to Terms page
        >
          Terms and Conditions
        </Button>
      </Box>

      {/* Right Section with Logo and Copyright */}
      <Box
        className="footer-right"
        display="flex"
        alignItems="center"
        gap="10px"
      >
        <Box className="logoContainer">
          <Image src="/logo.png" width={35} height={35} alt="SplitWiz logo" />
          <Typography variant="body2" sx={{ color: "#fff" }}>
            SplitWiz
          </Typography>
          <Typography variant="body2">&copy; {currentYear}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
