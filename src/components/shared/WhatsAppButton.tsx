'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);

        if (!isMobile) {
          setTimeout(() => setShowPreview(true), 3000);
        }
      } else {
        setIsVisible(false);
        setShowPreview(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const whatsappMessages = [
    'Olá! Gostaria de solicitar um orçamento para tradução.',
    'Oi! Tenho interesse em seus serviços de legendagem.',
    'Olá! Preciso de tradução simultânea para um evento.',
    'Oi! Gostaria de saber mais sobre seus serviços de tradução.',
    'Olá! Tenho um documento que precisa ser traduzido.',
    'Oi! Qual o prazo para tradução de um texto?',
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * whatsappMessages.length);
    return whatsappMessages[randomIndex];
  };

  const handleWhatsAppClick = () => {
    const message = getRandomMessage();
    const whatsappUrl = `https://wa.me/5585986356679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  type ClosePreviewEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const closePreview = (e: ClosePreviewEvent) => {
    e.stopPropagation();
    setShowPreview(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="hidden sm:block">
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
          {showPreview && !isMobile && (
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-4 max-w-sm backdrop-blur-sm bg-white/95 animate-fade-in-up">
              <button
                onClick={closePreview}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start space-x-3 pr-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Lua Abreu</p>
                    <p className="text-xs text-gray-500 font-medium">Tradutora Profissional</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-100">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Olá! 👋 Como posso ajudar com sua tradução hoje?
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-green-600 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Online agora
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Responder
                  </button>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 transform translate-x-1">
                <div className="w-3 h-3 bg-white border-r border-b border-gray-200/50 rotate-45"></div>
              </div>
            </div>
          )}

          <div
            className="relative group"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {showTooltip && (
              <div className="absolute right-16 bottom-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap animate-fade-in-left">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Fale comigo no WhatsApp!</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                  <div className="w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              </div>
            )}

            <button
              onClick={handleWhatsAppClick}
              className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 group-hover:shadow-green-500/25"
            >
              <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />

              <div className="absolute inset-0 rounded-2xl bg-green-500 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-2xl bg-green-500 animate-pulse opacity-10"></div>

              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse m-1"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="fixed bottom-4 right-4 z-50">
          <div className="relative">
            <button
              onClick={handleWhatsAppClick}
              className="relative bg-gradient-to-r from-green-500 to-green-600 active:from-green-600 active:to-green-700 text-white p-3.5 rounded-xl shadow-lg active:scale-95 transition-all duration-200 group"
            >
              <MessageCircle className="h-6 w-6" />

              <div className="absolute inset-0 rounded-xl bg-green-500 animate-pulse opacity-20"></div>

              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse m-0.5"></div>
              </div>

              <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                WhatsApp
              </div>
            </button>
          </div>
        </div>

        {showPreview && (
          <div className="fixed bottom-20 left-4 right-4 z-40 animate-slide-up">
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-3 max-w-xs mx-auto">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Lua Abreu</p>
                    <div className="text-xs text-green-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      Online
                    </div>
                  </div>
                </div>
                <button onClick={closePreview} className="text-gray-400 p-1">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 mb-2">
                <p className="text-sm text-gray-800">Olá! 👋 Precisa de tradução?</p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white text-sm py-2 rounded-lg font-medium"
              >
                Responder no WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }

        @media (max-width: 640px) {
          .animate-slide-up {
            animation-duration: 0.3s;
          }
        }
      `}</style>
    </>
  );
}
