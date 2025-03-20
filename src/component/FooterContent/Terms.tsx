import {
  Box,
  Typography,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import "./Terms.css";

const Terms = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "20px", marginTop: "100px" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          color="text.primary"
        >
          SplitWiz Terms and Conditions
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Effective Date: [Insert Date]
        </Typography>
      </Box>

      {/* Section 1: Introduction */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        1. Introduction
      </Typography>
      <Typography variant="body1" color="text.primary">
        Welcome to SplitWiz! These Terms and Conditions govern your use of our
        website, mobile application, and services (collectively,
        &quot;Services&quot;). By using SplitWiz, you agree to be bound by these
        Terms. If you do not agree, please do not use our Services.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 2: Eligibility */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        2. Eligibility
      </Typography>
      <Typography variant="body1" color="text.primary">
        You must be at least 13 years old to use SplitWiz. By using our
        Services, you confirm that you meet this requirement.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 3: Account Registration */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        3. Account Registration
      </Typography>
      <Typography variant="body1" color="text.primary">
        To use certain features of SplitWiz, you must create an account by
        providing accurate and complete information. You are responsible for
        maintaining the confidentiality of your login credentials and for any
        activity on your account.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 4: Use of Services */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        4. Use of Services
      </Typography>
      <Typography variant="body1" color="text.primary">
        You agree to use SplitWiz in accordance with these terms and applicable
        laws. Specifically, you agree not to:
      </Typography>
      <List
        sx={{
          color: "#4f5d73",
        }}
      >
        <ListItem>
          <ListItemText primary="Use the Services for any unlawful or fraudulent purpose." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Upload false, misleading, or inappropriate content." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Attempt to access other users' accounts without permission." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Interfere with the proper functioning of the Services." />
        </ListItem>
      </List>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 5: Expense Tracking and Group Sharing */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        5. Expense Tracking and Group Sharing
      </Typography>
      <Typography variant="body1" color="text.primary">
        SplitWiz allows users to track and share expenses with friends and
        groups. By using this feature, you acknowledge that:
      </Typography>
      <List
        sx={{
          color: "#4f5d73",
        }}
      >
        <ListItem>
          <ListItemText primary="You are responsible for the accuracy of the expenses you input." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Group members can view shared expenses and make modifications as permitted." />
        </ListItem>
        <ListItem>
          <ListItemText primary="SplitWiz does not mediate disputes between users." />
        </ListItem>
      </List>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 6: Data Privacy */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        6. Data Privacy
      </Typography>
      <Typography variant="body1" color="text.primary">
        Your privacy is important to us. Our collection and use of personal data
        are governed by our Privacy Policy, which you agree to by using
        SplitWiz.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 7: No Payment Processing */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        7. No Payment Processing
      </Typography>
      <Typography variant="body1" color="text.primary">
        SplitWiz does not process or store payment information. Users must
        handle payments externally, and SplitWiz is not responsible for any
        transactions made outside the app.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 8: Intellectual Property */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        8. Intellectual Property
      </Typography>
      <Typography variant="body1" color="text.primary">
        All content, trademarks, logos, and intellectual property associated
        with SplitWiz are owned by us or our licensors. You may not use our
        branding without written permission.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 9: Limitation of Liability */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        9. Limitation of Liability
      </Typography>
      <Typography variant="body1" color="text.primary">
        To the fullest extent permitted by law, SplitWiz is not liable for any:
      </Typography>
      <List
        sx={{
          color: "#4f5d73",
        }}
      >
        <ListItem>
          <ListItemText primary="Losses resulting from incorrect expense entries." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Disputes between users regarding expenses or payments." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Any damages resulting from unauthorized access to your account." />
        </ListItem>
      </List>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 10: Termination */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        10. Termination
      </Typography>
      <Typography variant="body1" color="text.primary">
        We reserve the right to suspend or terminate your account if you violate
        these Terms or engage in prohibited activities. You may also choose to
        delete your account at any time.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 11: Changes to Terms */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        11. Changes to Terms
      </Typography>
      <Typography variant="body1" color="text.primary">
        We may update these Terms periodically. Any significant changes will be
        communicated through the app or website. Continued use of SplitWiz after
        changes take effect constitutes acceptance of the updated Terms.
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 12: Governing Law */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        12. Governing Law
      </Typography>
      <Typography variant="body1" color="text.primary">
        These Terms are governed by the laws of [Your Country]. Any disputes
        shall be resolved in the courts of [Your Jurisdiction].
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Section 13: Contact Us */}
      <Typography variant="h5" component="h2" gutterBottom color="text.primary">
        13. Contact Us
      </Typography>
      <Typography variant="body1" color="text.primary">
        If you have questions about these Terms, contact us at:
      </Typography>
      <Typography variant="body1" color="text.primary">
        Email: <strong>contact@splitwiz.com</strong>
        <br />
        Website: <strong>www.splitwiz.com</strong>
      </Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Footer Section */}
      <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography variant="body2" color="text.secondary">
          By using SplitWiz, you agree to these Terms and Conditions and our
          commitment to safeguarding your data.
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms;
