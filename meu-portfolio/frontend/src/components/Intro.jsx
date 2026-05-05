import React, { useState, useEffect, useRef } from "react";

const Intro = ({ onEnter, imageSrc }) => {
  const [phase, setPhase] = useState("blur");
  const [btnVisible, setBtnVisible] = useState(false);
  const [imgStyle, setImgStyle] = useState({});
  const [bgStyle, setBgStyle] = useState({});
  const imgRef = useRef(null);

  useEffect(() => {
    document.body.style.background = "#131314";
    const t1 = setTimeout(() => setPhase("clear"), 400);
    const t2 = setTimeout(() => setBtnVisible(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleEnter = () => {
    // Step 1: fundo e botão caem
    setBgStyle({
      transform: "translateY(100%)",
      transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
    });

    // Step 2: após fundo cair, imagem voa até o hero
    setTimeout(() => {
      const heroPhoto = document.getElementById("hero-photo");
      const introImg = imgRef.current;

      if (heroPhoto && introImg) {
        const heroRect = heroPhoto.getBoundingClientRect();
        const introRect = introImg.getBoundingClientRect();

        const deltaX = heroRect.left - introRect.left + (heroRect.width - introRect.width) / 2;
        const deltaY = heroRect.top - introRect.top + (heroRect.height - introRect.height) / 2;
        const scale = heroRect.width / introRect.width;

        setImgStyle({
          transform: `translate(${deltaX}px, ${deltaY}px) scale(${1})`,
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease 0.5s",
          opacity: 0,
          transformOrigin: "center center",
        });
      } else {
        setImgStyle({ opacity: 0, transition: "opacity 0.4s ease" });
      }

      setTimeout(() => onEnter(), 750);
    }, 750);
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      overflow: "hidden",
    }}>

      <style>{`
        .intro-image {
          width: min(420px, 80vw);
          height: min(420px, 80vh);
          object-fit: contain;
          border-radius: 12px;
          filter: blur(20px) brightness(0.6);
          transform: scale(1.08);
          transition:
            filter 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .intro-image.clear {
          filter: blur(0px) brightness(1);
          transform: scale(1);
        }

        .ver-btn {
          background: transparent;
          border: 1.5px solid #eee;
          color: #eee;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 99px;
          cursor: pointer;
          opacity: 0;
          margin-top: 150px;
          transform: translateY(8px);
          transition: opacity 0.5s ease, transform 0.5s ease, background 0.2s ease;
        }
        .ver-btn.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ver-btn:hover {
          background: rgba(255,255,255,0.08);
        }

        .intro-line {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #999;
          opacity: 0;
          margin-top: 16px;
          transition: opacity 0.6s ease 1.4s;
        }
        .intro-line.show { opacity: 1; }
      `}</style>

      {/* Fundo que cai */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "#131314",
        zIndex: 1,
        ...bgStyle,
      }} />

      {/* Botão e hint (caem junto com o fundo) */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "calc(min(340px, 80vh) + 48px)",
        ...bgStyle,
      }}>
        <button
          className={`ver-btn${btnVisible ? " visible" : ""}`}
          onClick={handleEnter}
        >
          Ver
        </button>
        <span className={`intro-line${btnVisible ? " show" : ""}`}>
          portfólio
        </span>
      </div>

      {/* Imagem centralizada (fica e depois voa) */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}>
        <img
          ref={imgRef}
          src={imageSrc}
          alt="intro"
          className={`intro-image${phase === "clear" ? " clear" : ""}`}
          style={imgStyle}
        />
      </div>
    </div>
  );
};

export default Intro;