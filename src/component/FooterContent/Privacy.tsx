import {
  Box,
  Typography,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const Privacy = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "40px 20px", marginTop: "80px" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: "#2c3e50", fontWeight: "bold" }}
        >
          SplitWizz Privacy Policy
        </Typography>
      </Box>

      {/** Section Component **/}
      {[
        {
          title: "1. Scope",
          content: `Welcome to SplitWizz! Your right to privacy and online security is important to us. 
            This Privacy Policy explains how SplitWizz Inc. collects, protects, discloses, and uses your information. 
            This policy applies to all of SplitWizz’s websites, mobile applications, and services that link to this Privacy Policy.
            \n\nBy using SplitWizz, you agree to this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.`,
        },
        {
          title: "2. Information We Collect",
          content:
            "When you use SplitWizz, we may collect the following information:",
          list: [
            "- Account Information: Your name, email address, and phone number when you sign up.",
            "- Expense Data: Bills and receipts you upload for expense tracking.",
            "- Device Information: Information such as device type, operating system, and app version for performance improvements.",
            "- Usage Data: Interactions within the app to enhance user experience.",
          ],
        },
        {
          title: "3. How Your Data is Used",
          content: "We use your information to:",
          list: [
            "- Provide and improve our bill-splitting services.",
            "- Maintain security and prevent fraud.",
            "- Offer customer support and respond to inquiries.",
            "- Improve user experience and app performance.",
          ],
          extra: "We do not sell your personal data to third parties.",
        },
        {
          title: "4. Data Security",
          content:
            "We take appropriate security measures to protect your data from unauthorized access, loss, or misuse. All user data stays within our company's secured infrastructure and is never shared with third parties for marketing purposes.",
        },
        {
          title: "5. Data Sharing and Third-Party Services",
          content:
            "We do not sell or share your data with advertisers or external businesses. Any data shared is strictly for providing essential services such as cloud storage and AI-powered receipt processing.",
        },
        {
          title: "6. User Control and Data Deletion",
          content: "You have control over your data. You may:",
          list: [
            "- Edit or delete your account information.",
            "- Request data deletion by contacting us at contact@splitWizz.com.",
          ],
        },
        {
          title: "7. International Data Transfers",
          content:
            "SplitWizz operates worldwide. If you access our services outside of Canada, your information may be transferred and processed in other countries. We ensure that any data transferred is protected under applicable data protection laws.",
        },
        {
          title: "8. Children's Privacy",
          content:
            "SplitWizz is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we discover such data, we will delete it immediately.",
        },
        {
          title: "9. Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time. Any significant changes will be notified to users through the app or email.",
        },
        {
          title: "10. Contact Us",
          content: (
            <>
              For any questions about this Privacy Policy, you can contact us
              at:
              <br />
              Email:{" "}
              <Link
                href="mailto:splitwizzapp@gmail.com"
                sx={{ color: "#536B53", textDecoration: "none" }}
              >
                splitwizzapp@gmail.com
              </Link>
              <br />
              Website:{" "}
              <Link
                href="https://www.splitwizz.com"
                target="_blank"
                sx={{ color: "#536B53", textDecoration: "none" }}
              >
                www.splitwizz.com
              </Link>
            </>
          ),
        },
      ].map(({ title, content, list, extra }, index) => (
        <Box key={index} sx={{ marginBottom: "30px" }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: "#2c3e50", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4f5d73", marginBottom: "10px" }}
          >
            {content}
          </Typography>
          {list && (
            <List sx={{ color: "#4f5d73", marginLeft: "20px", paddingTop: 0 }}>
              {list.map((item, idx) => (
                <ListItem key={idx} sx={{ padding: "2px 0" }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          )}
          {extra && (
            <Typography variant="body1" sx={{ color: "#4f5d73" }}>
              {extra}
            </Typography>
          )}
          <Divider sx={{ margin: "20px 0" }} />
        </Box>
      ))}

      {/* Footer Section */}
      <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ color: "#7f8c8d" }}
        >
          By using SplitWizz, you agree to this Privacy Policy and our
          commitment to safeguarding your data.
        </Typography>
      </Box>
    </Container>
  );
};

export default Privacy;
