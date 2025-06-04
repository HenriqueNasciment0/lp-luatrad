'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para conectar
              <span className="block text-blue-300">seu conteúdo ao mundo?</span>
            </h2>

            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              Precisa de uma tradução profissional, ágil e de qualidade?
            </p>

            <p className="text-lg text-blue-200 mb-12 max-w-xl mx-auto">
              Fale comigo agora e receba seu orçamento personalizado em até 24 horas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://wa.me/5585986356679?text=Olá! Gostaria de solicitar um orçamento para tradução."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[250px] justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-3" />
              Fale comigo no WhatsApp
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:contato@tradutora.com?subject=Solicitação de Orçamento - Tradução&body=Olá! Gostaria de solicitar um orçamento para serviços de tradução."
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[250px] justify-center"
            >
              <Mail className="h-5 w-5 mr-3" />
              Solicitar por E-mail
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-blue-200">Resposta Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">14+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">Satisfação Garantida</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-blue-700"
          >
            <p className="text-blue-200 text-sm">
              ✨ Orçamento gratuito e sem compromisso • Atendimento personalizado • Entregas
              pontuais
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
