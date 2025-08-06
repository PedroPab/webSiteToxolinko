'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ArrowRight, CheckCircle, Clock, Zap } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const CTAFinal: React.FC = () => {
  const urgencyPoints = [
    'Cada minuto que esperas, pierdes leads',
    'Tus competidores ya están automatizando',
    'El costo de no actuar es mayor que el de empezar'
  ]

  const quickWins = [
    { icon: Clock, text: 'Setup en 72h', subtext: 'Desde la primera llamada' },
    { icon: Zap, text: 'ROI inmediato', subtext: 'Desde el primer lead automatizado' },
    { icon: CheckCircle, text: 'Sin riesgo', subtext: 'Garantía de funcionamiento' }
  ]

  return (
    <section id="cta-final" className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Última oportunidad
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Empieza a automatizar
              <span className="block bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                hoy mismo
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Miles de leads se pierden cada día por respuestas lentas. 
              <strong className="text-white"> No dejes que los tuyos sean parte de esa estadística.</strong>
            </p>
          </motion.div>

          {/* Urgency points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {urgencyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <p className="text-gray-200 text-sm">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick wins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {quickWins.map((win, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <win.icon className="w-8 h-8 text-accent-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{win.text}</h3>
                <p className="text-gray-300 text-sm">{win.subtext}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton
                size="lg"
                className="bg-accent-500 hover:bg-accent-600 text-white border-accent-500 group text-lg px-8 py-4"
                href="#agenda"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Reservar llamada gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
              
              <div className="text-gray-300">o</div>
              
              <CTAButton
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
                whatsapp={{
                  phone: "+57000000000",
                  message: "¡Hola! Estoy listo para automatizar mis leads con ToxoLinko. Quiero empezar YA."
                }}
              >
                Empezar por WhatsApp
              </CTAButton>
            </div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 mt-8"
            >
              <p className="text-gray-200 text-sm">
                🛡️ <strong>Garantía total:</strong> Si no funciona en 72h, te devolvemos tu dinero. 
                <br />Sin preguntas, sin complicaciones.
              </p>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mt-8"
            >
              <p className="text-gray-300 text-sm mb-2">Ya confían en nosotros:</p>
              <div className="flex justify-center items-center space-x-6 opacity-60">
                <span className="text-white/70">TiendaOnline+</span>
                <span className="text-white/70">ConsultoraDigital</span>
                <span className="text-white/70">InmobiliariaXYZ</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-accent-500 opacity-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: -5
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary-500 opacity-10"
        />
      </div>
    </section>
  )
}
