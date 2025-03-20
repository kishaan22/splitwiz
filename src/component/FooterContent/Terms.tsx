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

const TermsOfService = () => {
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
          SplitWizz Terms of Service
        </Typography>
      </Box>

      {/** Section Component **/}
      {[
        {
          title: "1. Introduction",
          content: `Welcome to SplitWizz! By using our services, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please refrain from using our services.`,
        },
        {
          title: "2. Account Registration",
          content:
            "To use our services, you must create an account with accurate information. You are responsible for maintaining the confidentiality of your account details.",
        },
        {
          title: "3. Acceptable Use",
          content:
            "You agree to use SplitWizz only for lawful purposes and in a manner that does not infringe upon the rights of others.",
          list: [
            "- Do not upload harmful content.",
            "- Do not misuse our services for fraudulent or illegal activities.",
            "- Respect the privacy and data security of others.",
          ],
        },
        {
          title: "4. User Responsibilities",
          content:
            "You are responsible for all activities conducted through your account, including any unauthorized use or breach of these terms.",
        },
        {
          title: "5. Service Availability",
          content:
            "While we strive to provide uninterrupted service, SplitWizz does not guarantee that our services will always be available, and we may perform maintenance from time to time.",
        },
        {
          title: "6. Termination of Services",
          content:
            "We reserve the right to suspend or terminate your account at any time, for any reason, without notice, if you violate these Terms of Service.",
        },
        {
          title: "7. Dispute Resolution",
          content:
            "Any disputes arising from these Terms of Service will be resolved through binding arbitration, and not in court.",
        },
        {
          title: "8. Limitation of Liability",
          content:
            "SplitWizz is not liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.",
        },
        {
          title: "9. Changes to Terms",
          content:
            "We may update these Terms of Service from time to time. Changes will be effective immediately upon posting on our website or within the app.",
        },
        {
          title: "10. Contact Us",
          content: `For any questions regarding these Terms of Service, you can contact us at:`,
          extra: (
            <Typography variant="body1" sx={{ color: "#4f5d73" }}>
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
            </Typography>
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
          {extra && extra}
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
          By using SplitWizz, you agree to these Terms of Service and our
          commitment to delivering a secure service.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
