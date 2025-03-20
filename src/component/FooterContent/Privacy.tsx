import {
  Box,
  Typography,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Privacy = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "20px", marginTop: "100px" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#2c3e50" }}
        >
          SplitWiz Privacy Policy
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ color: "#7f8c8d" }}
        >
          Effective Date: [Insert Date]
        </Typography>
      </Box>

      {/* Section 1: Scope */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        1. Scope
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        Welcome to SplitWiz! Your right to privacy and online security is
        important to us. This Privacy Policy explains how SplitWiz Inc.
        collects, protects, discloses, and uses your information. This policy
        applies to all of SplitWiz’s websites, mobile applications, and services
        that link to this Privacy Policy.
        <br />
        <br />
        By using SplitWiz, you agree to this Privacy Policy. If you do not agree
        with any part of this policy, please do not use our services.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 2: Information We Collect */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        2. Information We Collect
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        When you use SplitWiz, we may collect the following information:
      </Typography>
      <List
        sx={{
          color: "#4f5d73",
        }}
      >
        <ListItem>
          <ListItemText primary="Account Information: Your name, email address, and phone number when you sign up." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Expense Data: Bills and receipts you upload for expense tracking." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Device Information: Information such as device type, operating system, and app version for performance improvements." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Usage Data: Interactions within the app to enhance user experience." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph sx={{ color: "#4f5d73" }}>
        We do not collect or store any payment details.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 3: How Your Data is Used */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        3. How Your Data is Used
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#4f5d73" }}>
        We use your information to:
      </Typography>
      <List
        sx={{
          color: "#4f5d73",
        }}
      >
        <ListItem>
          <ListItemText primary="Provide and improve our bill-splitting services." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Maintain security and prevent fraud." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Offer customer support and respond to inquiries." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Improve user experience and app performance." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph sx={{ color: "#4f5d73" }}>
        We do not sell your personal data to third parties.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 4: Data Security */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        4. Data Security
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#4f5d73" }}>
        We take appropriate security measures to protect your data from
        unauthorized access, loss, or misuse. All user data stays within our
        company&apos;s secured infrastructure and is never shared with third
        parties for marketing purposes.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 5: Data Sharing and Third-Party Services */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        5. Data Sharing and Third-Party Services
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        We do not sell or share your data with advertisers or external
        businesses. Any data shared is strictly for providing essential services
        such as cloud storage and AI-powered receipt processing.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 6: User Control and Data Deletion */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        6. User Control and Data Deletion
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        You have control over your data. You may:
      </Typography>
      <List
        sx={{
          color: "#4f5d73",
        }}
      >
        <ListItem>
          <ListItemText primary="Edit or delete your account information." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Request data deletion by contacting us at contact@splitwiz.com." />
        </ListItem>
      </List>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 7: International Data Transfers */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        7. International Data Transfers
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        SplitWiz operates worldwide. If you access our services outside of
        Canada, your information may be transferred and processed in other
        countries. We ensure that any data transferred is protected under
        applicable data protection laws.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 8: Children's Privacy */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        8. Children&apos;s Privacy
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        SplitWiz is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children. If we discover
        such data, we will delete it immediately.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 9: Changes to This Policy */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        9. Changes to This Policy
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#4f5d73" }}>
        We may update this Privacy Policy from time to time. Any significant
        changes will be notified to users through the app or email.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 10: Contact Us */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ color: "#2c3e50" }}
      >
        10. Contact Us
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        For any questions about this Privacy Policy, you can contact us at:
      </Typography>
      <Typography variant="body1" sx={{ color: "#4f5d73" }}>
        Email: <strong>contact@splitwiz.com</strong>
        <br />
        Website: <strong>www.splitwiz.com</strong>
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Footer Section */}
      <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ color: "#7f8c8d" }}
        >
          By using SplitWiz, you agree to this Privacy Policy and our commitment
          to safeguarding your data.
        </Typography>
      </Box>
    </Container>
  );
};

export default Privacy;
