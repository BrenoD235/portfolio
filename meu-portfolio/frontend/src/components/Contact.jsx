import React, { useState } from "react";
import { MapPin, Mail, Phone, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { portfolioData } from "../mock";

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://portfolio-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          assunto: formData.subject,
          mensagem: formData.message,
        }),
      });

      if (response.ok) {
        toast({ title: "Mensagem enviada!", description: "Obrigado pelo contato. Responderei em breve!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: "Erro", description: "Não foi possível enviar a mensagem." });
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Erro de conexão", description: "Servidor não respondeu." });
    }
  };

  const socialLinks = [
    { name: "GitHub", url: personal.socialLinks.github, icon: Github, color: "hover:text-white" },
    { name: "LinkedIn", url: personal.socialLinks.linkedin, icon: Linkedin, color: "hover:text-blue-400" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#252526]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contato</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades e projetos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-[#1b1a1f]">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <MessageCircle size={24} className="mr-2" />
                  Vamos conversar!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Estou sempre aberto a novas oportunidades e conversas interessantes.
                  Entre em contato comigo através dos canais abaixo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail size={20} className="text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href={`mailto:${personal.email}`} className="text-gray-300 hover:text-white transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Telefone</p>
                      <a href={`tel:${personal.phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Localização</p>
                      <p className="text-gray-300">{personal.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-lg bg-[#1b1a1f]">
              <CardHeader>
                <CardTitle className="text-xl text-white">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-700 rounded-lg text-gray-300 ${social.color} hover:bg-gray-600 transition-all duration-200 transform hover:scale-105`}
                      title={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-[#1b1a1f]">
            <CardHeader>
              <CardTitle className="text-xl text-white">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nome
                    </label>
                    <Input
                      id="name" name="name" type="text"
                      value={formData.name} onChange={handleInputChange} required
                      className="border-gray-600 bg-[#131314] text-white focus:border-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email" name="email" type="email"
                      value={formData.email} onChange={handleInputChange} required
                      className="border-gray-600 bg-[#131314] text-white focus:border-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Assunto
                  </label>
                  <Input
                    id="subject" name="subject" type="text"
                    value={formData.subject} onChange={handleInputChange} required
                    className="border-gray-600 bg-[#131314] text-white focus:border-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message" name="message" rows={5}
                    value={formData.message} onChange={handleInputChange} required
                    className="border-gray-600 bg-[#131314] text-white focus:border-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} className="mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;