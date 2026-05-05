import React from "react";
import { portfolioData } from "../mock";
import minhaFoto from "../assets/Foto.png";

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="bg-white dark:bg-[#131314]"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "end",
          gap: "0",
        }}
      >
        {/* Left — text */}
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: "104px",
  }}
>
          <h1
            style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: "700",
              lineHeight: "1.05",
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}
            className="text-gray-900 dark:text-white"
          >
            {personal.name}
          </h1>

          <h2
            style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: "300",
              margin: "0",
              letterSpacing: "0.01em",
            }}
            className="text-gray-500 dark:text-gray-400"
          >
            {personal.title}
          </h2>
        </div>

        {/* Right — photo anchored to bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingLeft: "32px",
          }}
        >
          <img
            id="hero-photo"
            src={minhaFoto}
            alt={personal.name}
            style={{
              width: "min(340px, 80vw)",
              height: "auto",
              maxHeight: "52vh",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "12px 12px 0 0",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;