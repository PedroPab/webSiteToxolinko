'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, MessageSquare, CheckCircle } from 'lucide-react'

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Responde primero',
      description: 'Notificaciones al instante en WhatsApp, Telegram o SMS',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'Menos errores',
      description: 'Flujo validado 24/7 sin intervención manual',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Escalable',
      description: 'Hasta 100,000 leads por mes sin problemas',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MessageSquare,
      title: 'Soporte cercano',
      description: 'Grupo de WhatsApp con tu equipo y el nuestro',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <section id="beneficios" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Beneficios que transformarán tu negocio ✅
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con ToxoLinko no solo automatizas, ganas una ventaja competitiva real
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${benefit.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Y además obtienes:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Configuración personalizada para tu negocio',
              'Monitoreo 24/7 del sistema',
              'Correcciones y ajustes ilimitados',
              'Tiempo de respuesta garantizado',
              'Integración con herramientas existentes',
              'Reportes de rendimiento mensuales'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
