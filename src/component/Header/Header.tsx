"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook
import "./Header.css";

export const Header = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Now maintained within Header component
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Simplified scroll check
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={`Header ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <Box className="logoContainer">
        <Image src="/logo.png" width={35} height={35} alt="SplitWiz logo" />
        <Typography className="logo">SplitWiz</Typography>
      </Box>

      {/* Navigation Buttons */}
      <Box className="buttonContainer">
        {["home", "faq", "contact-us"].map((section) => (
          <Button
            key={section}
            variant="outlined"
            onClick={() => {
              setActiveSection(section); // Update the active section when a button is clicked
              router.push(`/${section}`); // Directly navigate with useRouter
            }}
            sx={{
              margin: "5px",
              color:
                activeSection === section
                  ? "#fff" // Always white for active buttons
                  : scrolled
                  ? "#999" // Light gray for non-active buttons when scrolled
                  : "#536B53", // Normal color for non-active buttons when not scrolled
              borderColor:
                activeSection === section
                  ? "#A7D7A7" // Green border for active button when not scrolled
                  : scrolled
                  ? "#999" // Light gray border when scrolled
                  : "#536B53", // Default border color for non-active buttons
              backgroundColor:
                activeSection === section
                  ? scrolled
                    ? "#A7D7A7" // Light green background for active button when scrolled
                    : "#536B53" // Dark green background for active button when not scrolled
                  : "transparent", // Transparent background for non-active buttons
              fontWeight: activeSection === section ? "bold" : "normal",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#A7D7A7",
                color: "#536B53",
                transform: "scale(1.05)",
                boxShadow: "0px 4px 10px rgba(167, 215, 167, 0.3)",
              },
            }}
          >
            {section === "contact-us"
              ? "Contact Us"
              : section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
