import React from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { portfolioData } from "../mock";

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-[#252526]">
      <div className="w-full">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sobre mim
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e objetivos
          </p>
        </div>

        <div className="flex justify-between items-start gap-12 px-24">
          {/* Card Minha História */}
          <Card className="border-0 shadow-lg bg-[#1b1a1f] w-[45%] h-[270px] overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Minha História
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {personal.bio}
              </p>
              <div className="flex items-center text-gray-400 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>{personal.location}</span>
              </div>
            </CardContent>
          </Card>

          {/* Card Objetivos */}
          <Card className="border-0 shadow-lg bg-[#1b1a1f] w-[45%] h-[270px] overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Objetivos
              </h3>
              <div className="space-y-3">
                <p className="text-gray-400"> Conseguir minha primeira oportunidade como desenvolvedor júnior</p>
                <p className="text-gray-400"> Dominar React.js e tecnologias modernas</p>
                <p className="text-gray-400"> Contribuir com projetos open source</p>
                <p className="text-gray-400"> Trabalhar em equipe e aprender com desenvolvedores experientes</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
