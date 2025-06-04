'use client';

import { CheckCircle2, Globe, Clock, Users, Heart, Shield, Zap, ArrowRight } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      id: 'fluency',
      title: 'Fluência Comprovada',
      description: 'Mais de 14 anos de experiência com inglês em contextos reais',
      icon: CheckCircle2,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50',
    },
    {
      id: 'international',
      title: 'Experiência Internacional',
      description: 'Trabalho voluntário semanal com equipes globais mantém-me atualizada',
      icon: Globe,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
    },
    {
      id: 'humanized',
      title: 'Traduções Humanizadas',
      description: 'Nunca automatizadas - cada projeto recebe atenção pessoal',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50',
    },
    {
      id: 'deadlines',
      title: 'Compromisso com Prazos',
      description: 'Entrega pontual é prioridade em todos os projetos',
      icon: Clock,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
    },
    {
      id: 'personalized',
      title: 'Atendimento Personalizado',
      description: 'Comunicação direta e transparente durante todo o processo',
      icon: Users,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
    },
    {
      id: 'global',
      title: 'Alcance Global',
      description: 'Atendo clientes no Brasil e no exterior com excelência',
      icon: Zap,
      color: 'from-cyan-500 to-teal-600',
      bgColor: 'from-cyan-50 to-teal-50',
    },
  ];

  return (
    <section
      id="differentials"
      className="py-20 lg:py-32 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Meus Diferenciais</span>
            </div>

            <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 leading-tight">
              Por que me{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                escolher?
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Conheça os diferenciais que tornam meu trabalho único e confiável para cada projeto
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <div
                key={differential.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500 hover:bg-white/90 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'slideInUp 0.6s ease-out forwards',
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${differential.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300`}
                ></div>

                <div className="relative z-10 space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${differential.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                      {differential.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                      {differential.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <div
                      className={`w-8 h-0.5 bg-gradient-to-r ${differential.color} rounded-full`}
                    ></div>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div
                  className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${differential.color} opacity-10 rounded-bl-2xl rounded-tr-2xl group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 text-center text-white space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-3xl lg:text-4xl leading-tight">
                    Qualidade que faz a <span className="text-yellow-300">diferença</span>
                  </h3>

                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                    Cada projeto é tratado com o cuidado e a atenção que merece. Meu objetivo é
                    sempre superar suas expectativas com resultados excepcionais.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                  {[
                    { value: '100%', label: 'Satisfação dos Clientes', icon: Heart },
                    { value: '24h', label: 'Tempo de Resposta', icon: Clock },
                    { value: '14+', label: 'Anos de Experiência', icon: CheckCircle2 },
                    { value: 'Global', label: 'Alcance Internacional', icon: Globe },
                  ].map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                      >
                        <StatIcon className="w-8 h-8 mx-auto mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl lg:text-3xl font-bold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-sm opacity-80 font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
