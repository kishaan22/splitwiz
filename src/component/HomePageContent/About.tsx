import { Box, Typography } from "@mui/material";
// import Marquee from "react-fast-marquee";

import "./About.css";
import Image from "next/image";

export const About = () => {
  return (
    <Box className="about">
      <Box className="content">
        <Box className="textContainer">
          <Box className="title">
            <Typography
              sx={{
                color: "#fff",
                fontSize: "45px",
              }}
            >
              SplitWizz
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "45px",
              }}
            >
              The Smart Way to Split Bills
            </Typography>
          </Box>
          <Box className="description">
            <Typography
              sx={{
                color: "#fff",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              Tired of Complicated Bill Splitting? We’ve Got You Covered!
              SplitWizz makes splitting expenses effortless. Just snap a picture
              of your bill, and our AI will automatically recognize items,
              calculate totals, and fairly split the cost among your group—all
              for free!
            </Typography>
          </Box>
        </Box>

        {/* Image aligned to the right */}
        <Image
          className="about-image"
          src="/about.svg"
          width={300}
          height={300}
          alt="about image"
        />
      </Box>

      {/* Scrolling "Coming Soon" Message */}
      {/* <Box className="scrollingMessage">
        <Box className="scrollingMessageContainer">
          <Marquee
            direction="left"
            speed={100}
            style={{ fontSize: "25px", fontWeight: "bold", color: "#7f7f7f" }}
          >
            Coming Soon! We’re working hard to bring SplitWizz to you! Stay tuned
            for our app launch.
          </Marquee>
        </Box>
      </Box> */}
    </Box>
  );
};
