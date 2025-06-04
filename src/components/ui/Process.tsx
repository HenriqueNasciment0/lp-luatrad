'use client';

import { MessageCircle, Clock, CheckCircle, Zap, ArrowRight, Star, Mail } from 'lucide-react';

const processSteps = [
  {
    id: '1',
    step: 1,
    title: 'Primeiro Contato',
    description:
      'Você entra em contato via WhatsApp, e-mail ou formulário. Conte-me sobre seu projeto e suas necessidades específicas.',
    icon: MessageCircle,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
    accentColor: 'from-blue-400 to-indigo-500',
  },
  {
    id: '2',
    step: 2,
    title: 'Orçamento Personalizado',
    description:
      'Analiso seu material e envio um orçamento detalhado em até 24 horas, com prazo e condições claras.',
    icon: Clock,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-50',
    accentColor: 'from-amber-400 to-orange-500',
  },
  {
    id: '3',
    step: 3,
    title: 'Aprovação e Início',
    description:
      'Após sua aprovação, inicio o trabalho imediatamente. Você recebe atualizações durante o processo.',
    icon: Zap,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'from-purple-50 to-violet-50',
    accentColor: 'from-purple-400 to-violet-500',
  },
  {
    id: '4',
    step: 4,
    title: 'Entrega de Qualidade',
    description:
      'Entrego seu projeto no prazo combinado, com revisão completa e total garantia de qualidade.',
    icon: CheckCircle,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'from-emerald-50 to-green-50',
    accentColor: 'from-emerald-400 to-green-500',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-amber-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Processo Simplificado</span>
            </div>

            <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 leading-tight">
              Como funciona o{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                processo?
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Um processo simples e transparente para garantir que você tenha a melhor experiência
              desde o primeiro contato até a entrega final
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 z-0">
                    <div className="w-3/4 h-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent rounded-full"></div>
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}

                <div
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/30 transition-all duration-500 hover:bg-white hover:-translate-y-3 z-10"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'slideInUp 0.7s ease-out forwards',
                  }}
                >
                  {/* Step number badge */}
                  <div
                    className={`absolute -top-4 left-8 w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.step}
                  </div>

                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6 pt-4">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <div
                        className={`w-8 h-0.5 bg-gradient-to-r ${step.accentColor} rounded-full`}
                      ></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-2xl rounded-tr-2xl group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10 text-center text-white space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-3xl lg:text-4xl leading-tight">
                    Pronto para <span className="text-yellow-300">começar?</span>
                  </h3>

                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                    O processo é simples e rápido. Entre em contato agora e receba seu orçamento
                    personalizado em até 24 horas!
                  </p>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <a
                    href="https://wa.me/5531999999999?text=Olá! Gostaria de solicitar um orçamento para tradução."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500 hover:border-green-400"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <a
                    href="mailto:contato@exemplo.com?subject=Solicitação de Orçamento"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold shadow-lg backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Enviar E-mail
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                  {[
                    { value: '24h', label: 'Resposta Garantida', icon: Clock },
                    { value: '100%', label: 'Processo Transparente', icon: CheckCircle },
                    { value: 'Simples', label: '4 Passos Apenas', icon: Zap },
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
            transform: translateY(40px);
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
