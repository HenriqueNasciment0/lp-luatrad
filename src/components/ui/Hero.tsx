'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Mail, Globe, Star } from 'lucide-react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    'Traduções profissionais',
    'Legendagem de vídeos',
    'Interpretação simultânea',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5585986356679';
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para tradução.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:luanicole@gmail.com?subject=Solicitação de Orçamento', '_blank');
  };

  interface ScrollToSectionFn {
    (sectionId: string): void;
  }

  const scrollToSection: ScrollToSectionFn = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 transform transition-all duration-1000">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">14+ anos de experiência</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-bold text-4xl lg:text-6xl text-gray-800 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {rotatingTexts[currentText]}
                </span>
              </h1>
              <h2 className="font-bold text-4xl lg:text-6xl text-gray-800 leading-tight">
                de Inglês ⇆ Português
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Conectando pessoas e negócios através da comunicação.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Tradução de artigos, legendagem de vídeos e interpretação simultânea para clientes
                no Brasil e no exterior.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Atendimento Internacional</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>Resposta em até 24h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale comigo no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleEmailClick}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 text-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Solicitar orçamento</span>
              </button>
            </div>

            <button
              onClick={() => scrollToSection('services')}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-colors duration-200 group"
            >
              <span>Conheça meus serviços</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 max-w-md w-full">
              {/* Photo Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-200/50 to-purple-200/50 flex items-center justify-center">
                  <div className="text-center text-blue-700">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-semibold text-lg">Lua Abreu</p>
                    <p className="text-sm opacity-75">Foto Profissional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">14+</div>
                  <div className="text-sm text-gray-600">Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
