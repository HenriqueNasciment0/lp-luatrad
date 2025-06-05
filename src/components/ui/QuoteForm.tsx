'use client';

import React, { useState } from 'react';
import {
  FileText,
  Languages,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  DollarSign,
} from 'lucide-react';

export default function QuoteRequestForm() {
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    translationDirection: '',
    documentType: '',
    wordCount: '',
    deadline: '',
    urgency: 'normal',
    additionalInfo: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const translationOptions = [
    { value: 'en-pt', label: 'Inglês → Português' },
    { value: 'pt-en', label: 'Português → Inglês' },
    { value: 'both', label: 'Ambos os sentidos' },
  ];

  const documentTypes = [
    'Documentos Acadêmicos',
    'Materiais Corporativos',
    'Contratos Jurídicos',
    'Websites/E-commerce',
    'Marketing/Publicidade',
    'Manuais Técnicos',
    'Legendas/Vídeos',
    'Livros/Literatura',
    'Outros',
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Normal (7-10 dias)', color: 'text-green-600' },
    { value: 'urgent', label: 'Urgente (3-5 dias)', color: 'text-yellow-600' },
    { value: 'express', label: 'Express (24-48h)', color: 'text-red-600' },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.translationDirection)
      newErrors.translationDirection = 'Selecione a direção da tradução';
    if (!formData.documentType) newErrors.documentType = 'Selecione o tipo de documento';
    if (!formData.wordCount.trim()) newErrors.wordCount = 'Número de palavras é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    if (!GOOGLE_SCRIPT_URL) {
      console.error('URL do Google Script não configurada!');
      return { ok: false };
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return { ok: true };
    } catch (error) {
      console.error('Erro ao enviar:', error);
      return { ok: false };
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await submitToGoogleSheets(formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        translationDirection: '',
        documentType: '',
        wordCount: '',
        deadline: '',
        urgency: 'normal',
        additionalInfo: '',
        budget: '',
      });
    } catch (error) {
      console.log(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h2 className="font-bold text-3xl text-gray-800 mb-4">
                Solicitação Enviada com Sucesso!
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Recebi sua solicitação de orçamento e entrarei em contato em até 24 horas com uma
                proposta personalizada para seu projeto.
              </p>

              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Fazer Nova Solicitação
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote-form"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Orçamento Gratuito</span>
            </div>

            <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 leading-tight">
              Solicite seu{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                orçamento personalizado
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário abaixo e receba uma proposta detalhada em até 24 horas
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Nome */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <User className="w-4 h-4" />
                  <span>Nome Completo *</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700 ${
                    errors.name
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 focus:border-blue-400'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span>Email *</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700 ${
                    errors.email
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 focus:border-blue-400'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>Telefone</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700"
                  placeholder="(85) 99999-9999"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <FileText className="w-4 h-4" />
                  <span>Empresa/Instituição</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700"
                  placeholder="Nome da empresa (opcional)"
                />
              </div>

              {/* Direção da Tradução */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <Languages className="w-4 h-4" />
                  <span>Direção da Tradução *</span>
                </label>
                <select
                  value={formData.translationDirection}
                  onChange={(e) => handleInputChange('translationDirection', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700 ${
                    errors.translationDirection
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 focus:border-blue-400'
                  }`}
                >
                  <option value="">Selecione a direção</option>
                  {translationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.translationDirection && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.translationDirection}</span>
                  </p>
                )}
              </div>

              {/* Tipo de Documento */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <FileText className="w-4 h-4" />
                  <span>Tipo de Documento *</span>
                </label>
                <select
                  value={formData.documentType}
                  onChange={(e) => handleInputChange('documentType', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700 ${
                    errors.documentType
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 focus:border-blue-400'
                  }`}
                >
                  <option value="">Selecione o tipo</option>
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.documentType && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.documentType}</span>
                  </p>
                )}
              </div>

              {/* Número de Palavras */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <FileText className="w-4 h-4" />
                  <span>Número de Palavras *</span>
                </label>
                <input
                  type="text"
                  value={formData.wordCount}
                  onChange={(e) => handleInputChange('wordCount', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700 ${
                    errors.wordCount
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 focus:border-blue-400'
                  }`}
                  placeholder="Ex: 5000 palavras ou páginas"
                />
                {errors.wordCount && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.wordCount}</span>
                  </p>
                )}
              </div>

              {/* Prazo */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <Calendar className="w-4 h-4" />
                  <span>Prazo Desejado</span>
                </label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700"
                />
              </div>

              {/* Urgência */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Nível de Urgência</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {urgencyOptions.map((option) => (
                    <label key={option.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={option.value}
                        checked={formData.urgency === option.value}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          formData.urgency === option.value
                            ? 'border-blue-400 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`text-sm font-medium ${option.color}`}>{option.label}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Orçamento */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                  <DollarSign className="w-4 h-4" />
                  <span>Orçamento Estimado</span>
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-700"
                  placeholder="R$ (opcional)"
                />
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-2 mb-8">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <MessageSquare className="w-4 h-4" />
                <span>Informações Adicionais</span>
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none text-gray-700"
                placeholder="Descreva detalhes específicos do projeto, área de especialização, requisitos especiais, etc."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition-all duration-200 flex items-center space-x-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Solicitar Orçamento Gratuito</span>
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Resposta garantida em até 24 horas • Orçamento sem compromisso
              </p>
            </div>

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center space-x-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Erro ao enviar solicitação</span>
                </div>
                <p className="text-red-600 text-sm mt-1">
                  Tente novamente ou entre em contato pelo WhatsApp.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
