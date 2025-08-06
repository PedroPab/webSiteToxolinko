'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Key, Settings, Monitor } from 'lucide-react'

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Diagnóstico express (30 min)',
      description: 'Llamada para mapear tus fuentes y destinos de leads',
      details: [
        'Análisis de tu situación actual',
        'Identificación de oportunidades',
        'Propuesta de flujo personalizado'
      ]
    },
    {
      icon: Key,
      title: 'Accesos temporales',
      description: 'Usuario/token a tus plataformas principales',
      details: [
        'Sitio web / Funnel',
        'Shopify / WooCommerce',
        'CRM / Hojas de cálculo'
      ]
    },
    {
      icon: Settings,
      title: 'Configuración & pruebas',
      description: 'Flujos operativos en ≤ 72 h',
      details: [
        'Integración completa',
        'Pruebas exhaustivas',
        'Validación de funcionamiento'
      ]
    },
    {
      icon: Monitor,
      title: 'Monitoreo continuo',
      description: 'Alarmas internas y corrección proactiva',
      details: [
        'Supervisión 24/7',
        'Alertas automáticas',
        'Mantenimiento preventivo'
      ]
    }
  ]

  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Cómo funciona el proceso 🔧
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y probado que te lleva de leads perdidos a automatización completa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 mb-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center relative">
                    <step.icon className="w-6 h-6 text-primary-600" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 ml-16">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-sm">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-primary-200 rounded"></div>
                    <div className="h-3 bg-primary-200 rounded w-3/4"></div>
                    <div className="h-3 bg-primary-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">⏱️ Tiempo total del proceso</h3>
          <div className="flex justify-center items-center space-x-8">
            <div>
              <div className="text-3xl font-bold">30min</div>
              <div className="text-primary-100">Diagnóstico</div>
            </div>
            <div className="text-2xl">+</div>
            <div>
              <div className="text-3xl font-bold">≤72h</div>
              <div className="text-primary-100">Implementación</div>
            </div>
            <div className="text-2xl">=</div>
            <div>
              <div className="text-3xl font-bold">∞</div>
              <div className="text-primary-100">Automatización</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
