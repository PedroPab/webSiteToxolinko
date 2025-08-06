'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const PriceCard: React.FC = () => {
  const features = [
    'Correcciones y cambios ilimitados',
    'Soporte Lun-Sáb 9 am–6 pm',
    'Grupo de WhatsApp dedicado',
    'Integración con todas tus plataformas',
    'Alertas personalizadas en tiempo real',
    'Monitoreo continuo 24/7',
    'Configuración personalizada',
    'Reportes mensuales de rendimiento'
  ]

  return (
    <section id="precio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Un solo plan, todo incluido 💰
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sin sorpresas, sin límites ocultos. Solo resultados garantizados.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border-2 border-primary-100 relative overflow-hidden"
          >
            {/* Popular badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current" />
                <span>Más Popular</span>
              </div>
            </div>

            <div className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Único ToxoLinko</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">$109.000</span>
                    <div className="ml-3 text-left">
                      <div className="text-gray-600 text-sm">COP</div>
                      <div className="text-gray-600 text-sm">por mes</div>
                    </div>
                  </div>
                  
                  {/* Condition */}
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800 font-medium">
                      ⚡ Solo se factura si superas <strong>250 leads/mes</strong>
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Todo lo que necesitas para automatizar completamente tus leads
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <CTAButton
                  className="w-full group"
                  size="lg"
                  whatsapp={{
                    phone: "+57000000000",
                    message: "¡Hola! Quiero empezar con el plan de ToxoLinko"
                  }}
                >
                  Empezar ahora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </CTAButton>
                
                <CTAButton
                  variant="secondary"
                  className="w-full"
                  href="#agenda"
                >
                  Agendar llamada gratuita
                </CTAButton>
              </div>

              {/* Guarantee */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  💯 <strong>Garantía de funcionamiento</strong><br />
                  Si no funciona en 72h, te devolvemos tu dinero
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              ¿Por qué cobramos solo después de 250 leads?
            </h4>
            <p className="text-gray-600">
              Creemos en nuestro servicio. Queremos que primero veas los resultados y 
              luego pagues por el valor que realmente recibes. Es nuestra forma de 
              garantizar que ToxoLinko funciona para tu negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
