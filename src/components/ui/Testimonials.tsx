'use client';

import React, { useState, useEffect } from 'react';
import type { JSX } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: '1',
      name: 'Carlos Mendes',
      role: 'CEO',
      company: 'TechBrasil',
      content: `Lua traduziu nossos materiais corporativos com uma precisão impressionante. A naturalidade do texto em português manteve perfeitamente o tom profissional que queríamos transmitir.`,
      rating: 5,
      avatar: 'CM',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: '2',
      name: 'Ana Paula Santos',
      role: 'Professora',
      company: 'UFRJ',
      content: `Excelente trabalho na tradução dos meus artigos acadêmicos. Lua compreende as nuances técnicas e entrega sempre no prazo. Recomendo sem hesitação!`,
      rating: 5,
      avatar: 'AS',
      color: 'from-emerald-500 to-green-600',
    },
    {
      id: '3',
      name: 'Roberto Silva',
      role: 'Diretor',
      company: 'Global Events',
      content: `A interpretação simultânea da Lua em nosso evento internacional foi perfeita. Todos os participantes elogiaram a fluidez e precisão da tradução.`,
      rating: 5,
      avatar: 'RS',
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: '4',
      name: 'Lucia Fernandes',
      role: 'YouTuber',
      company: 'Canal Educativo',
      content: `As legendas dos meus vídeos ficaram perfeitas! Lua capturou exatamente o tom descontraído do canal. Parceria que deu muito certo!`,
      rating: 5,
      avatar: 'LF',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: '5',
      name: 'David Johnson',
      role: 'Marketing Manager',
      company: 'USA Corp',
      content: `Outstanding work translating our marketing materials into Portuguese. Lua understood our brand voice perfectly and delivered exceptional quality.`,
      rating: 5,
      avatar: 'DJ',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating ? 'text-yellow-400 fill-current transform scale-110' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5585986356679';
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para tradução.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Depoimentos</span>
            </div>

            <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 leading-tight">
              O que meus{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                clientes dizem
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Depoimentos reais de profissionais que já confiaram no meu trabalho
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-60"></div>

            <div className="absolute left-8 z-20">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="relative z-10 pt-6 space-y-8">
              <div className="flex justify-center space-x-1">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed text-center font-medium">
                {testimonials[currentIndex].content}
              </blockquote>

              <div className="text-center pt-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-xl`}
                >
                  {testimonials[currentIndex].avatar}
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 text-lg">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-20 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-20 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
              }`}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 group"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideInUp 0.6s ease-out forwards',
              }}
            >
              <div className="flex space-x-1 mb-4">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                {testimonial.content.length > 120
                  ? testimonial.content.substring(0, 120) + '...'
                  : testimonial.content}
              </p>

              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm group-hover:text-gray-900 transition-colors duration-200">
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10 text-center text-white space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-3xl lg:text-4xl leading-tight">
                    Quer ser o próximo <span className="text-yellow-300">cliente satisfeito?</span>
                  </h3>

                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                    Junte-se aos profissionais que já confiam no meu trabalho e obtiveram resultados
                    excepcionais
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center space-x-2 text-sm opacity-80">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <span>Resposta em até 24h</span>
                  </div>
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
