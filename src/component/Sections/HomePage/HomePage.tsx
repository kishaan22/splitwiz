"use client";

import { About } from "@/component/HomePageContent/About";
import "./HomePage.css";

import { Footer } from "@/component/HomePageContent/Footer";
import { Features } from "@/component/HomePageContent/Features";
import { Work } from "@/component/HomePageContent/Work";

export const HomePage = () => {
  return (
    <>
      <About />
      <Features />
      <Work />
      <Footer />
    </>
  );
};
