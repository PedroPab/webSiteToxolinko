'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Phone, Clock, Users, CheckCircle, Headphones } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const Support: React.FC = () => {
  const supportFeatures = [
    {
      icon: MessageSquare,
      title: 'Grupo de WhatsApp',
      description: 'Seguimiento, dudas y cambios en tiempo real',
      details: 'Tu equipo + nuestro equipo en un solo chat para transparencia total'
    },
    {
      icon: Phone,
      title: 'Teléfono directo',
      description: 'Para emergencias, atención inmediata',
      details: 'Línea directa para cuando necesites soporte urgente'
    },
    {
      icon: Clock,
      title: 'Tiempo de respuesta',
      description: '≤ 4 horas hábiles garantizadas',
      details: 'Lun-Sáb 9 am–6 pm. WhatsApp: generalmente < 30 min'
    },
    {
      icon: Users,
      title: 'Equipo dedicado',
      description: 'Mismo equipo siempre, conocen tu negocio',
      details: 'No explicarás tu caso una y otra vez a personas diferentes'
    }
  ]

  const communicationFlow = [
    {
      step: '1',
      title: 'Reportas el problema',
      description: 'WhatsApp, email o teléfono',
      icon: MessageSquare
    },
    {
      step: '2', 
      title: 'Confirmamos recepción',
      description: 'En menos de 1 hora hábil',
      icon: CheckCircle
    },
    {
      step: '3',
      title: 'Solucionamos y reportamos',
      description: 'Con evidencias del fix aplicado',
      icon: Headphones
    }
  ]

  return (
    <section id="soporte" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Soporte que realmente resuelve 📲
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No eres solo un ticket más. Trabajamos contigo como si fuéramos parte de tu equipo.
          </p>
        </motion.div>

        {/* Support Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-3">{feature.description}</p>
              <p className="text-sm text-gray-500">{feature.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Communication Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Cómo funciona nuestro soporte
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {communicationFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 shadow-md text-center relative">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center mt-4">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>

                {/* Arrow */}
                {index < communicationFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary-300">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            🛡️ Nuestra garantía de soporte
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Disponibilidad garantizada</h4>
              <p className="text-primary-100 text-sm">
                Si el sistema se cae, lo arreglamos en máximo 2 horas o te devolvemos el mes completo
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Respuesta garantizada</h4>
              <p className="text-primary-100 text-sm">
                Si no respondemos en 4 horas hábiles, el siguiente mes es gratis
              </p>
            </div>
          </div>
          
          <CTAButton
            className="bg-white text-primary-600 hover:bg-gray-100"
            whatsapp={{
              phone: "+57000000000",
              message: "Hola! Quiero conocer más sobre el soporte de ToxoLinko"
            }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Hablar con soporte
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
