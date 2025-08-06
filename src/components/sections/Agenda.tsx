'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const Agenda: React.FC = () => {
  const benefits = [
    'Análisis gratuito de tu situación actual',
    'Propuesta personalizada para tu negocio', 
    'Demo en vivo de la automatización',
    'Estimación de ROI específica para tu caso',
    'Sin compromiso - solo información valiosa'
  ]

  return (
    <section id="agenda" className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Diagnóstico Gratuito
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Listo para empezar? 🗓️
              </h2>
              <h3 className="text-xl lg:text-2xl mb-6 text-primary-100">
                Reserva tu llamada gratuita de diagnóstico
              </h3>
              <p className="text-lg text-primary-100 mb-8">
                En 30 minutos te mostramos cómo ToxoLinko puede ahorrarte horas de trabajo 
                y aumentar tus ventas. Sin compromisos, solo valor.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent-200 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <CTAButton
                  className="bg-white text-primary-600 hover:bg-gray-100 group"
                  size="lg"
                  href="https://calendly.com/pablo-pedro-toxolinko/diagnostico-gratuito"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar ahora (30 min)
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </CTAButton>
              </motion.div>
              
              <p className="text-sm text-primary-200">
                También puedes solicitar el servicio directamente vía WhatsApp si ya lo tienes claro.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <CTAButton
                  variant="secondary"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
                  whatsapp={{
                    phone: "+573054489598",
                    message: "¡Hola! Ya tengo claro mi proyecto y quiero empezar con ToxoLinko"
                  }}
                >
                  Empezar por WhatsApp
                </CTAButton>
              </motion.div>
            </div>
          </motion.div>

          {/* Calendar Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-white mb-6">
                <h4 className="text-lg font-semibold mb-2">Próximos horarios disponibles</h4>
                <p className="text-primary-100 text-sm">Selecciona el que mejor te convenga</p>
              </div>
              
              {/* Mock calendar slots */}
              <div className="space-y-3">
                {[
                  { day: 'Hoy', time: '4:00 PM - 4:30 PM', available: true },
                  { day: 'Mañana', time: '10:00 AM - 10:30 AM', available: true },
                  { day: 'Mañana', time: '2:00 PM - 2:30 PM', available: true },
                  { day: 'Viernes', time: '11:00 AM - 11:30 AM', available: false },
                ].map((slot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      slot.available 
                        ? 'bg-white/20 hover:bg-white/30 cursor-pointer' 
                        : 'bg-gray-500/20 opacity-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-primary-200" />
                      <div>
                        <div className="text-white text-sm font-medium">{slot.day}</div>
                        <div className="text-primary-200 text-xs">{slot.time}</div>
                      </div>
                    </div>
                    {slot.available ? (
                      <CheckCircle className="w-5 h-5 text-accent-300" />
                    ) : (
                      <div className="text-xs text-gray-400">Ocupado</div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-primary-200 text-sm text-center">
                  ⚡ Respuesta típica: Dentro de 2 horas
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 bg-accent-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              ✨ Sin costo
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute -bottom-4 -right-4 bg-secondary-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              📞 30 min
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
