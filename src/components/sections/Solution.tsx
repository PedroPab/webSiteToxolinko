'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link2, Send, Bell, CheckCircle2, ShoppingCart, Globe, Zap } from 'lucide-react'

export const Solution: React.FC = () => {
  const platforms = [
    { name: 'Shopify', icon: ShoppingCart },
    { name: 'WooCommerce', icon: ShoppingCart },
    { name: 'Funnels', icon: Link2 },
    { name: 'Web propia', icon: Globe },
    { name: 'Formularios', icon: CheckCircle2 },
  ]

  const steps = [
    {
      icon: Link2,
      title: 'Capturamos',
      description: 'Conectamos todas tus fuentes de leads'
    },
    {
      icon: Send,
      title: 'Enviamos',
      description: 'Transferimos automáticamente a tu CRM'
    },
    {
      icon: Bell,
      title: 'Avisamos',
      description: 'Te notificamos al instante por WhatsApp'
    }
  ]

  return (
    <section id="solucion" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            La Solución
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ToxoLinko conecta todo automáticamente 💡
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecta tus fuentes de leads con cualquier destino usando APIs abiertas. 
            Simple, rápido y sin complicaciones técnicas.
          </p>
        </motion.div>

        {/* Platform Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Plataformas soportadas
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 px-6 py-4 rounded-lg flex items-center space-x-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <platform.icon className="w-6 h-6 text-primary-600" />
                <span className="font-medium text-gray-900">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How it works - 3 steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">
            Resumen en 3 pasos
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center relative">
                    <step.icon className="w-10 h-10 text-primary-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-8">
                    <div className="w-full h-0.5 bg-primary-200 mt-4 relative">
                      <div className="absolute right-0 top-[-3px] w-0 h-0 border-l-4 border-l-primary-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
