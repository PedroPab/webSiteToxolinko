'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageSquare, Send, MapPin } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    const whatsappMessage = `Hola! Soy ${formData.name} de ${formData.company}. 
Website: ${formData.website}
Mensaje: ${formData.message}`
    
    const phone = "+57000000000"
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Hablemos de tu proyecto 📞
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para resolver tus dudas y comenzar a automatizar tus leads hoy mismo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contacta directamente con Pablo/Pedro
              </h3>
              <p className="text-gray-600 mb-8">
                Somos un equipo pequeño y dedicado. Cuando nos contactas, hablas directamente 
                con quienes van a trabajar en tu proyecto.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">+57 (000) 000-0000</p>
                  <CTAButton
                    variant="secondary"
                    size="sm"
                    whatsapp={{
                      phone: "+57000000000",
                      message: "Hola! Quiero información sobre ToxoLinko"
                    }}
                  >
                    Enviar mensaje
                  </CTAButton>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:hola@toxolinko.com" 
                    className="text-blue-600 hover:underline"
                  >
                    hola@toxolinko.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Llamada directa</h4>
                  <p className="text-gray-600 mb-2">Para emergencias y consultas urgentes</p>
                  <CTAButton
                    variant="secondary"
                    size="sm"
                    href="tel:+57000000000"
                  >
                    Llamar ahora
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            {/* Response time */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">⏱️ Tiempo de respuesta</h4>
              <p className="text-gray-600">
                Respondemos en máximo <strong>4 horas hábiles</strong>. 
                Para WhatsApp, generalmente en menos de 30 minutos.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Formulario de contacto rápido
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Sitio web o URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="https://tuempresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                ></textarea>
              </div>

              <CTAButton
                type="submit"
                className="w-full group"
                size="lg"
              >
                Enviar mensaje por WhatsApp
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Al enviar, tu mensaje se abrirá en WhatsApp para que puedas enviarlo directamente
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
