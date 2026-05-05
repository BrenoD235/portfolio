import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../mock";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const { skills } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);

  const getIcon = (iconName) => {
    const icons = {
      code: SiJavascript,
      paintbrush: FaCss3Alt,
      zap: FaHtml5,
      "git-branch": FaGitAlt,
      smartphone: FaReact,
    };
    return icons[iconName] || FaHtml5;
  };

  const getIconColor = (iconName) => {
    const colors = {
      code: "#F7DF1E",
      paintbrush: "#2965f1",
      zap: "#e34c26",
      "git-branch": "#F05032",
      smartphone: "#61DAFB",
    };
    return colors[iconName] || "#ffffff";
  };

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "básico":
        return "bg-yellow-900 text-yellow-200 border-yellow-700";
      case "intermediário":
        return "bg-blue-900 text-blue-200 border-blue-700";
      case "avançado":
        return "bg-green-900 text-green-200 border-green-700";
      default:
        return "bg-gray-700 text-gray-200 border-gray-600";
    }
  };

  const updatedSkills = skills.map((skill) =>
    skill.icon === "smartphone"
      ? { ...skill, name: "React", description: "Componentes, hooks, estado e props" }
      : skill
  );

  const prev = () => setActiveIndex((i) => (i === 0 ? updatedSkills.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === updatedSkills.length - 1 ? 0 : i + 1));
  const getCardIndex = (offset) => (activeIndex + offset + updatedSkills.length) % updatedSkills.length;

  const visibleCards = [-1, 0, 1].map((offset) => ({
    skill: updatedSkills[getCardIndex(offset)],
    offset,
  }));

  return (
    <section
      id="skills"
      style={{
        height: "520px",
        background: "#131314",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <style>{`
        .carousel-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          overflow: hidden;
        }
        .arrow-btn {
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .arrow-btn:hover {
          background: rgba(255,255,255,0.1);
          transform: scale(1.1);
        }
      `}</style>

      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", width: "100%" }}>

        {/* Título */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>
            Habilidades Técnicas
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "18px" }}>
            Tecnologias que estou aprendendo e desenvolvendo
          </p>
        </div>

        {/* Carrossel */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>

          {/* Seta esquerda */}
          <button
            onClick={prev}
            className="arrow-btn"
            style={{
              width: "48px", height: "48px", borderRadius: "50%",
              border: "1px solid #374151", background: "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#d1d5db", cursor: "pointer",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "24px", overflow: "hidden",
            width: "100%", maxWidth: "720px",
            height: "260px",
          }}>
            {visibleCards.map(({ skill, offset }) => {
              const IconComponent = getIcon(skill.icon);
              const iconColor = getIconColor(skill.icon);
              const isCenter = offset === 0;

              return (
                <Card
                  key={offset}
                  className="carousel-card border-0 bg-[#1b1a1f]"
                  onClick={() => !isCenter && setActiveIndex(getCardIndex(offset))}
                  style={{
                    width: isCenter ? "280px" : "200px",
                    height: "260px",
                    cursor: isCenter ? "default" : "pointer",
                    opacity: isCenter ? 1 : 0.5,
                    transform: isCenter ? "scale(1)" : "scale(0.85)",
                    filter: isCenter ? "brightness(1)" : "brightness(0.6)",
                    boxShadow: isCenter ? "0 0 30px rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <CardContent style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                    overflow: "hidden",
                  }}>
                    {/* Ícone */}
                    <div style={{
                      background: "#2a2a2f",
                      borderRadius: "12px",
                      width: isCenter ? "72px" : "56px",
                      height: isCenter ? "72px" : "56px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "16px",
                      flexShrink: 0,
                    }}>
                      <IconComponent size={isCenter ? 36 : 28} style={{ color: iconColor }} />
                    </div>

                    {/* Nome */}
                    <h3 style={{
                      fontWeight: "600", color: "#ffffff",
                      fontSize: isCenter ? "20px" : "16px",
                      marginBottom: "8px", flexShrink: 0,
                    }}>
                      {skill.name}
                    </h3>

                    {/* Badge */}
                    <Badge
                      variant="outline"
                      className={getLevelColor(skill.level)}
                      style={{ marginBottom: "12px", flexShrink: 0 }}
                    >
                      {skill.level}
                    </Badge>

                    {/* Descrição — sempre reserva espaço */}
                    <p style={{
                      color: "#d1d5db", fontSize: "14px",
                      height: "40px", overflow: "hidden",
                      opacity: isCenter ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      flexShrink: 0,
                    }}>
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Seta direita */}
          <button
            onClick={next}
            className="arrow-btn"
            style={{
              width: "48px", height: "48px", borderRadius: "50%",
              border: "1px solid #374151", background: "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#d1d5db", cursor: "pointer",
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {updatedSkills.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "99px",
                background: i === activeIndex ? "#ffffff" : "#4a4a4f",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;