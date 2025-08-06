'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
              >
                <Zap className="w-4 h-4 mr-2" />
                Automatización en menos de 72h
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Convierte cada clic en un{' '}
                <span className="gradient-text">lead listo para vender</span>{' '}
                <Rocket className="inline w-12 h-12 text-primary-600 animate-bounce-light" />
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-gray-600 max-w-xl"
              >
                Integramos tus formularios, tiendas y funnels con tu CRM en menos de 72 h.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-3"
            >
              {[
                'Respuesta automática en segundos',
                'Integración con cualquier plataforma',
                'Soporte directo por WhatsApp'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton
                size="lg"
                whatsapp={{
                  phone: "+57000000000",
                  message: "¡Hola! Quiero automatizar mis leads con ToxoLinko"
                }}
                className="group"
              >
                Quiero automatizar mis leads
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
              
              <CTAButton
                variant="secondary"
                size="lg"
                href="#como-funciona"
              >
                Ver cómo funciona
              </CTAButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by growing businesses</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-2xl font-bold text-gray-400">Shopify</div>
                <div className="text-2xl font-bold text-gray-400">WooCommerce</div>
                <div className="text-2xl font-bold text-gray-400">Zapier</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-primary-200 to-primary-100 rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-accent-200 to-accent-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded w-1/2"></div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <Target className="w-8 h-8 text-primary-600 mb-2" />
                    <div className="text-sm font-semibold text-primary-800">Leads Captados</div>
                    <div className="text-2xl font-bold text-primary-600">247</div>
                  </div>
                  <div className="bg-accent-50 p-4 rounded-lg">
                    <Zap className="w-8 h-8 text-accent-600 mb-2" />
                    <div className="text-sm font-semibold text-accent-800">Resp. Promedio</div>
                    <div className="text-2xl font-bold text-accent-600">12s</div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="absolute -top-4 -right-4 bg-accent-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
              >
                🎉 Nuevo lead captado!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-100 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-100 opacity-20 blur-3xl"></div>
      </div>
    </section>
  )
}
