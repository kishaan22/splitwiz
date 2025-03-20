import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";
import "./contact.css";
import Image from "next/image";

export const Contact = () => {
  return (
    <Box className="contactPage">
      <Container maxWidth="lg">
        <Box className="contactWrapper">
          {/* Left - Contact Form */}
          <Paper
            elevation={3}
            className="contactFormContainer"
            sx={{ borderRadius: "40px" }}
          >
            <Box className="contactFormSection">
              <Typography variant="h4" className="sectionTitle">
                Get in Touch
              </Typography>
              <Typography variant="body1" className="sectionText">
                Have a question or need support? Drop us a message!
              </Typography>
              <form className="contactForm">
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="formField"
                />
                <TextField
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  className="formField"
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  className="formField"
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "100%",
                    backgroundColor: "#536b53",
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#a7d7a7", color: "#333" }, // Hover effect
                  }}
                >
                  Submit
                </Button>
              </form>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                OR Contact Us at:{" "}
                <a
                  href="mailto:splitwizzapp@gmail.com"
                  className="contactEmail"
                >
                  splitwizzapp@gmail.com
                </a>
              </Typography>
            </Box>
          </Paper>

          {/* Right - Image Section */}
          <Box className="contactImageContainer">
            <Image
              src="contact_us.svg"
              width={500}
              height={500}
              alt="Contact Us"
              className="contactImage"
              style={{ marginLeft: "150px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
