import { Box, Typography } from "@mui/material";
import "./Work.css";
import Image from "next/image";

const howItWorks = [
  {
    step: "1️⃣",
    title: "Create a Group",
    description: "Add your friends and housemates.",
  },
  {
    step: "2️⃣",
    title: "Upload Your Bill",
    description: "AI scans and extracts item details.",
  },
  {
    step: "3️⃣",
    title: "Split Smartly",
    description: "Choose equal split or assign items individually.",
  },
  {
    step: "4️⃣",
    title: "Settle with Ease",
    description: "Track who owes what, no headaches!",
  },
];

export const Work = () => {
  return (
    <Box className="work-container">
      <Box className="content-container">
        <Box className="work">
          <Typography variant="h4" className="work-title">
            How It <span className="highlight">Works?</span>
          </Typography>
          <Box className="work-steps">
            {howItWorks.map((step, index) => (
              <Typography
                key={index}
                className="work-step"
                sx={{ fontSize: "18px" }}
              >
                {step.step} <span>{step.title}</span> – {step.description}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="image-container">
        <Image
          className="about-image"
          src="/how_it_works.svg"
          width={300}
          height={300}
          alt="about image"
        />
      </Box>
    </Box>
  );
};
