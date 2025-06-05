'use client';

import React, { useState } from 'react';
import { FileText, Globe, Clock, User, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    sourceLanguage: '',
    targetLanguage: '',
    documentType: '',
    wordCount: '',
    deadline: '',
    urgency: '',
    additionalInfo: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceTypes = [
    { value: 'document-translation', label: 'Tradução de Documentos' },
    { value: 'website-translation', label: 'Tradução de Website' },
    { value: 'marketing-translation', label: 'Tradução de Material de Marketing' },
    { value: 'academic-translation', label: 'Tradução Acadêmica' },
    { value: 'technical-translation', label: 'Tradução Técnica' },
    { value: 'simultaneous-interpretation', label: 'Interpretação Simultânea' },
    { value: 'subtitle-translation', label: 'Tradução de Legendas' },
    { value: 'other', label: 'Outro' },
  ];

  const documentTypes = [
    { value: 'contract', label: 'Contratos' },
    { value: 'certificate', label: 'Certidões/Certificados' },
    { value: 'manual', label: 'Manuais Técnicos' },
    { value: 'website', label: 'Conteúdo Web' },
    { value: 'marketing', label: 'Material Publicitário' },
    { value: 'academic', label: 'Artigos Acadêmicos' },
    { value: 'legal', label: 'Documentos Jurídicos' },
    { value: 'medical', label: 'Documentos Médicos' },
    { value: 'other', label: 'Outro' },
  ];

  const urgencyLevels = [
    { value: 'standard', label: 'Padrão (5-7 dias)', icon: Clock },
    { value: 'express', label: 'Expresso (2-3 dias)', icon: Clock },
    { value: 'urgent', label: 'Urgente (24-48h)', icon: AlertCircle },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';

    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.serviceType) newErrors.serviceType = 'Tipo de serviço é obrigatório';
    if (!formData.sourceLanguage) newErrors.sourceLanguage = 'Idioma de origem é obrigatório';
    if (!formData.targetLanguage) newErrors.targetLanguage = 'Idioma de destino é obrigatório';
    if (!formData.documentType) newErrors.documentType = 'Tipo de documento é obrigatório';
    if (!formData.urgency) newErrors.urgency = 'Prazo é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulating API call to Google Sheets
      // In a real implementation, you would integrate with Google Sheets API
      // or use a service like Zapier, Make.com, or a custom backend

      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          timestamp: Date.now(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          sourceLanguage: '',
          targetLanguage: '',
          documentType: '',
          wordCount: '',
          deadline: '',
          urgency: '',
          additionalInfo: '',
          budget: '',
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Error:', error);
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
                Orçamento Enviado com Sucesso!
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Obrigada pelo seu interesse! Analisarei sua solicitação e entrarei em contato em até
                24 horas com uma proposta personalizada.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Próximos passos:</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• Análise detalhada do seu projeto</li>
                  <li>• Cálculo personalizado do orçamento</li>
                  <li>• Contato via WhatsApp ou email</li>
                </ul>
              </div>

              <button
                onClick={() => setSubmitStatus('idle')}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
              <span className="text-sm font-medium text-blue-700">Solicitar Orçamento</span>
            </div>

            <h2 className="font-bold text-4xl lg:text-5xl text-gray-800 leading-tight">
              Precisa de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                tradução profissional?
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário abaixo e receba um orçamento personalizado em até 24 horas
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Formulário de Orçamento</h3>
                  <p className="text-blue-100">Conte-nos sobre seu projeto de tradução</p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 space-y-8">
              {/* Informações Pessoais */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <span>Informações de Contato</span>
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(85) 99999-9999"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
              </div>

              {/* Detalhes do Serviço */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Detalhes do Projeto</span>
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.serviceType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione o tipo de serviço</option>
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Documento *
                    </label>
                    <select
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.documentType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione o tipo de documento</option>
                      {documentTypes.map((doc) => (
                        <option key={doc.value} value={doc.value}>
                          {doc.label}
                        </option>
                      ))}
                    </select>
                    {errors.documentType && (
                      <p className="text-red-500 text-sm mt-1">{errors.documentType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idioma de Origem *
                    </label>
                    <select
                      name="sourceLanguage"
                      value={formData.sourceLanguage}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.sourceLanguage ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione o idioma</option>
                      <option value="portuguese">Português</option>
                      <option value="english">Inglês</option>
                    </select>
                    {errors.sourceLanguage && (
                      <p className="text-red-500 text-sm mt-1">{errors.sourceLanguage}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idioma de Destino *
                    </label>
                    <select
                      name="targetLanguage"
                      value={formData.targetLanguage}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.targetLanguage ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione o idioma</option>
                      <option value="portuguese">Português</option>
                      <option value="english">Inglês</option>
                    </select>
                    {errors.targetLanguage && (
                      <p className="text-red-500 text-sm mt-1">{errors.targetLanguage}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Palavras (estimativa)
                    </label>
                    <input
                      type="text"
                      name="wordCount"
                      value={formData.wordCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Ex: 1000 palavras"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Desejada de Entrega
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Urgência */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Prazo de Entrega *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {urgencyLevels.map((level) => (
                      <label
                        key={level.value}
                        className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.urgency === level.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          checked={formData.urgency === level.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <level.icon className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="font-medium text-gray-800">{level.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.urgency && <p className="text-red-500 text-sm mt-2">{errors.urgency}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Orçamento Estimado (opcional)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="under-500">Até R$ 500</option>
                    <option value="500-1000">R$ 500 - R$ 1.000</option>
                    <option value="1000-2500">R$ 1.000 - R$ 2.500</option>
                    <option value="2500-5000">R$ 2.500 - R$ 5.000</option>
                    <option value="over-5000">Acima de R$ 5.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Informações Adicionais
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Conte-nos mais sobre seu projeto, especificações técnicas, contexto, ou qualquer informação que possa ajudar no orçamento..."
                  />
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">
                    Houve um erro ao enviar o formulário. Tente novamente ou entre em contato via
                    WhatsApp.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Solicitar Orçamento</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Resposta garantida em 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
