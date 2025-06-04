'use client';

import { Calendar, Globe, Users, Rocket, Award, Heart } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2010',
      title: 'Início da jornada',
      description: 'Início dos estudos avançados de inglês',
      icon: Calendar,
    },
    {
      year: '2018',
      title: 'Experiência Internacional',
      description: 'Início do trabalho voluntário internacional',
      icon: Globe,
    },
    {
      year: '2020',
      title: 'Freelancer Profissional',
      description: 'Transição para tradutora freelancer',
      icon: Rocket,
    },
    {
      year: '2024',
      title: 'Expertise Consolidada',
      description: '100+ projetos realizados com sucesso',
      icon: Award,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Olá! Eu sou{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Lua Abreu
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sou tradutora profissional com mais de{' '}
                <strong className="text-gray-800">14 anos de experiência</strong> no idioma inglês.
                Minha paixão pela comunicação intercultural me levou a desenvolver uma expertise
                única em conectar pessoas e negócios através da linguagem.
              </p>

              <p>
                <strong className="text-gray-800">Semanalmente</strong>, utilizo o inglês em um
                trabalho voluntário internacional, onde alinho projetos com equipes de diversos
                países. Esta experiência contínua me mantém sempre atualizada com as nuances
                culturais e linguísticas de diferentes contextos.
              </p>

              <p>
                Meu compromisso é entregar traduções{' '}
                <strong className="text-gray-800">precisas, naturais e humanizadas</strong>— nunca
                automatizadas — que façam sentido tanto em português quanto em inglês, preservando o
                contexto e a intenção original de cada mensagem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-blue-600 mb-2">14+</div>
                <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-sm text-gray-600 font-medium">Projetos Realizados</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Photo Placeholder */}
            <div className="relative max-w-sm mx-auto">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50">
                <div className="w-full h-full bg-gradient-to-br from-blue-200/60 to-purple-200/60 flex items-center justify-center relative">
                  <div className="text-center text-blue-700">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-semibold text-lg">Lua Abreu</p>
                    <p className="text-sm opacity-80">Tradutora Profissional</p>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white/20 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Apaixonada por idiomas</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-gray-800 text-center">Minha Jornada</h3>

              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:bg-white/90 group"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: 'slideInRight 0.6s ease-out forwards',
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                          {item.year}
                        </span>
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
