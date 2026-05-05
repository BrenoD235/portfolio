import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../mock";

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1a1f] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F5F5F5]">BD</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Desenvolvedor Frontend Jr em constante aprendizado, buscando
              sempre melhorar e crescer na área de tecnologia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F5F5F5]">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { label: "Sobre", href: "#about" },
                { label: "Habilidades", href: "#skills" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() =>
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F5F5F5]">Contato</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">{personal.location}</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 block"
              >
                {personal.phone}
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {personal.name}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;