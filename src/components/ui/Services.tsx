'use client';

import { FileText, Video, Headphones, ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      id: 'text-translation',
      title: 'Tradução de Textos e Artigos',
      description: 'Traduções precisas e naturais para diversos tipos de conteúdo.',
      icon: 'FileText',
      features: [
        'Artigos acadêmicos e científicos',
        'Blogs e conteúdo web',
        'Materiais empresariais',
        'Documentos técnicos',
        'E-books e publicações',
      ],
    },
    {
      id: 'video-subtitling',
      title: 'Legendagem de Vídeos',
      description: 'Legendas sincronizadas e de qualidade profissional.',
      icon: 'Video',
      features: [
        'Vídeos institucionais',
        'Cursos online e treinamentos',
        'Palestras e webinars',
        'Conteúdo para YouTube',
        'Filmes e documentários',
      ],
    },
    {
      id: 'simultaneous-interpretation',
      title: 'Interpretação Simultânea Online',
      description: 'Comunicação em tempo real para eventos e reuniões.',
      icon: 'Headphones',
      features: [
        'Reuniões corporativas',
        'Workshops e seminários',
        'Eventos internacionais',
        'Conferências online',
        'Calls com equipes globais',
      ],
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-8 h-8" />;
      case 'Video':
        return <Video className="w-8 h-8" />;
      case 'Headphones':
        return <Headphones className="w-8 h-8" />;
      default:
        return <FileText className="w-8 h-8" />;
    }
  };

  const handleContactClick = () => {
    const phoneNumber = '+5585986356679';
    const message = encodeURIComponent(
      'Olá! Gostaria de conversar sobre meus serviços de tradução.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleServiceClick = (serviceTitle: string) => {
    const phoneNumber = '+5585986356679';
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${serviceTitle}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 mb-4">Meus Serviços</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Soluções completas de tradução para conectar você ao mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-gray-100"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {getIcon(service.icon)}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-all duration-200 group/btn hover:bg-blue-50 px-4 py-2 rounded-lg -mx-4"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <h3 className="font-semibold text-2xl lg:text-3xl mb-4">
                Não encontrou o que precisa?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Entre em contato para discutirmos sua necessidade específica de tradução
              </p>
              <button
                onClick={handleContactClick}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Falar com Lua</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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
