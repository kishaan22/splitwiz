import { Box, Typography, TextField, Button, Container } from "@mui/material";
import "./contact.css";

export const Contact = () => {
  return (
    <Box className="contactPage">
      <Container maxWidth="md">
        {/* Heading */}
        <Typography variant="h3" className="contactTitle">
          Contact Us
        </Typography>

        {/* Contact Info Section */}
        <Box className="contactInfo">
          <Typography variant="h5" className="sectionTitle">
            Get in Touch
          </Typography>
          <Typography variant="body1" className="sectionText">
            We’d love to hear from you! Whether you have a question or need
            support, feel free to contact us.
          </Typography>

          {/* Contact Info Card */}
          <Box className="infoCard">
            <Typography variant="body1">
              <strong>Email:</strong> contact@splitwiz.com
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> 123 Main St, Cityville, ABC 12345
            </Typography>
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Box className="contactFormSection">
          <Typography variant="h5" className="sectionTitle">
            Send Us a Message
          </Typography>

          {/* Contact Form */}
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
              color="primary"
              type="submit"
              className="submitButton"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
