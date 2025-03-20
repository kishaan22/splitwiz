import { Box, Typography } from "@mui/material";
import "./Features.css";
import Image from "next/image";

const features = [
  {
    title: "AI-Powered Bill Recognition",
    description: "No more manual entries, just upload your receipt!",
  },
  {
    title: "No Subscription Fees",
    description: "Unlike others, SplitWizz is completely free forever!",
  },
  {
    title: "Fair & Transparent Splitting",
    description: "Split bills equally or customize per user.",
  },
  {
    title: "Group Management",
    description: "Create groups, add friends, and track expenses hassle-free.",
  },
  {
    title: "Monetized with Ads, Not Fees",
    description: "Enjoy premium features without paying a dime.",
  },
];

export const Features = () => {
  return (
    <Box className="features-container">
      <Box className="image-container">
        <Image
          className="about-image"
          src="/why_choose.svg"
          width={300}
          height={300}
          alt="about image"
        />
      </Box>
      <Box className="content-container">
        <Box className="features">
          <Box className="heading">
            <Typography variant="h4" className="features-title">
              Why Choose <span className="highlight">SplitWizz?</span>
            </Typography>
          </Box>

          <Box className="features-list">
            {features.map((feature, index) => (
              <Typography
                key={index}
                className="feature-item"
                sx={{ fontSize: "20px" }}
              >
                ✅ <span>{feature.title}</span> – {feature.description}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
