'use client';

import { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Linkedin,
  Instagram,
  Languages,
  Globe,
  Heart,
  ArrowRight,
  Phone,
  Clock,
  Shield,
  Award,
  ChevronRight,
} from 'lucide-react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Serviços', href: '#services', icon: Award },
    { name: 'Sobre Mim', href: '#about', icon: Heart },
    { name: 'Diferenciais', href: '#differentials', icon: Shield },
    { name: 'Depoimentos', href: '#testimonials', icon: MessageCircle },
    { name: 'Processo', href: '#process', icon: Clock },
    { name: 'FAQ', href: '#faq', icon: Languages },
  ];

  const services = [
    { name: 'Tradução de Textos', highlight: true },
    { name: 'Legendagem de Vídeos', highlight: false },
    { name: 'Tradução Simultânea', highlight: true },
    { name: 'Revisão de Traduções', highlight: false },
    { name: 'Localização', highlight: false },
    { name: 'Transcrição', highlight: false },
  ];

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 85 98635-6679',
      href: 'https://wa.me/5585986356679',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@luaabreu.com',
      href: 'mailto:contato@luaabreu.com',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 85 3456-7890',
      href: 'tel:+5585986356679',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/tradutora',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/tradutora',
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'hover:from-pink-600 hover:to-rose-700',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Languages className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Lua Abreu
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">Tradutora Profissional</p>
                  </div>
                </div>

                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                Conectando pessoas e negócios através de traduções precisas e humanizadas entre
                <span className="font-semibold text-blue-400"> inglês</span> e
                <span className="font-semibold text-purple-400"> português</span>.
              </p>

              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.includes('http') ? '_blank' : undefined}
                      rel={contact.href.includes('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-medium">{contact.label}</div>
                        <div className="text-white font-semibold">{contact.value}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400 font-medium">Redes sociais:</span>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Links Rápidos</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <ul className="space-y-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 w-full text-left py-2 px-3 rounded-lg hover:bg-white/5"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            hoveredLink === link.name
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110'
                              : 'bg-white/10 text-gray-400'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                            hoveredLink === link.name ? 'translate-x-1' : ''
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Serviços</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                      service.highlight
                        ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/30 hover:border-blue-400/50'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          service.highlight
                            ? 'text-blue-300 group-hover:text-blue-200'
                            : 'text-gray-300 group-hover:text-white'
                        }`}
                      >
                        {service.name}
                      </span>
                      {service.highlight && (
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 border-t border-white/10">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 text-center text-white space-y-6">
              <div className="space-y-4">
                <MessageCircle className="w-12 h-12 mx-auto text-yellow-300" />

                <h3 className="font-bold text-2xl lg:text-3xl leading-tight">
                  Pronto para começar seu <span className="text-yellow-300">projeto?</span>
                </h3>

                <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
                  Entre em contato agora e receba um orçamento personalizado para suas necessidades
                  de tradução!
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/5585986356679?text=Olá! Gostaria de solicitar um orçamento para tradução."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500 hover:border-green-400"
                >
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">Inglês ⇆ Português</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Award className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Brasil & Internacional</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">MEI • Nota Fiscal</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
              <div className="text-sm text-gray-400">
                © {currentYear} Lua Abreu - Tradutora Profissional. Todos os direitos reservados.
              </div>

              <div className="flex items-center text-sm text-gray-400">
                <span>Feito com</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
                <span>para conectar idiomas</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                CNPJ: 00.000.000/0001-00 • Microempreendedor Individual
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
