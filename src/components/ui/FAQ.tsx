'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  FileText,
  Clock,
  Shield,
  DollarSign,
  Award,
  Zap,
} from 'lucide-react';

const faqData = [
  {
    id: '1',
    question: 'Quais formatos de arquivos você aceita?',
    answer:
      'Aceito diversos formatos como Word (.doc, .docx), PDF, PowerPoint (.ppt, .pptx), Excel (.xls, .xlsx), arquivos de texto (.txt), e formatos de vídeo para legendagem (MP4, AVI, MOV, etc.).',
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
  },
  {
    id: '2',
    question: 'Como funciona a tradução simultânea online?',
    answer:
      'Utilizo plataformas como Zoom, Google Meet ou Microsoft Teams. Ofereço interpretação consecutiva e simultânea, adaptando-me às necessidades do seu evento. É necessário um briefing prévio para melhor preparação.',
    icon: Zap,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'from-purple-50 to-violet-50',
  },
  {
    id: '3',
    question: 'Qual o prazo médio de entrega?',
    answer:
      'Depende da complexidade e extensão do projeto. Textos simples: 1-2 dias. Documentos técnicos: 3-5 dias. Legendagem: 2-4 dias. Sempre confirmo o prazo antes de iniciar o trabalho.',
    icon: Clock,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-50',
  },
  {
    id: '4',
    question: 'Você emite nota fiscal?',
    answer:
      'Sim, emito nota fiscal como MEI (Microempreendedor Individual) para todos os serviços prestados, garantindo total conformidade fiscal para seus projetos.',
    icon: Shield,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'from-emerald-50 to-green-50',
  },
  {
    id: '5',
    question: 'O pagamento pode ser feito em real (BRL) ou dólar (USD)?',
    answer:
      'Aceito pagamentos em reais (BRL) para clientes nacionais e em dólares (USD) para clientes internacionais. Formas de pagamento: PIX, transferência bancária ou PayPal.',
    icon: DollarSign,
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'from-cyan-50 to-teal-50',
  },
  {
    id: '6',
    question: 'Você trabalha com textos técnicos ou especializados?',
    answer:
      'Sim! Tenho experiência com documentos acadêmicos, técnicos, jurídicos e empresariais. Para textos muito específicos, faço uma pesquisa prévia para garantir a precisão terminológica.',
    icon: Award,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'from-pink-50 to-rose-50',
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Dúvidas Frequentes</span>
            </div>

            <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 leading-tight">
              Perguntas{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                frequentes
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Tire suas dúvidas sobre meus serviços de tradução e conheça melhor como posso ajudar
              você
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          {faqData.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openItem === faq.id;

            return (
              <div
                key={faq.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInUp 0.6s ease-out forwards',
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${faq.bgColor} opacity-0 ${
                    isOpen ? 'opacity-100' : 'group-hover:opacity-50'
                  } transition-all duration-300`}
                ></div>

                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-6 relative z-10 group-hover:bg-white/30 transition-colors duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-full bg-gray-100 group-hover:bg-white transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-gradient-to-r ' + faq.color + ' text-white' : ''
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 relative z-10">
                    <div className="ml-16 pt-2 border-t border-gray-200/50">
                      <p className="text-gray-600 leading-relaxed pt-4 text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${
                    faq.color
                  } opacity-5 ${
                    isOpen ? 'opacity-20' : 'group-hover:opacity-15'
                  } transition-opacity duration-300 rounded-bl-2xl rounded-tr-2xl`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 text-center text-white space-y-8">
                <div className="space-y-4">
                  <HelpCircle className="w-12 h-12 mx-auto text-yellow-300" />

                  <h3 className="font-bold text-3xl lg:text-4xl leading-tight">
                    Não encontrou sua <span className="text-yellow-300">dúvida?</span>
                  </h3>

                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                    Estou aqui para esclarecer qualquer questão sobre meus serviços. Entre em
                    contato e tire suas dúvidas!
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/5585986356679?text=Olá! Tenho uma dúvida sobre seus serviços de tradução."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500 hover:border-green-400"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Fale comigo no WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                  {[
                    { value: '24h', label: 'Resposta Rápida', icon: Clock },
                    { value: '100%', label: 'Transparência Total', icon: Shield },
                    { value: 'Direto', label: 'Sem Intermediários', icon: MessageCircle },
                  ].map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                      >
                        <StatIcon className="w-6 h-6 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-xl font-bold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
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
