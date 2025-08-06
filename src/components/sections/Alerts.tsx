'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bell, MapPin, DollarSign, Star, Filter, Smartphone, Settings, Zap } from 'lucide-react'

export const Alerts: React.FC = () => {
  const alertTypes = [
    {
      icon: DollarSign,
      title: 'Alertas por valor',
      description: 'Cuando llegue una venta o presupuesto que supere X valor',
      example: '"🔥 Venta de $2,500,000 - Cliente Premium detectado!"',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Filtrado por ciudad',
      description: 'Solo leads de ciudades específicas donde tienes operación',
      example: '"📍 Nuevo lead en Bogotá - Zona Norte disponible"',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Star,
      title: 'Leads VIP',
      description: 'Clientes que indican interés premium o palabras clave específicas',
      example: '"⭐ Lead VIP: Menciona \'urgente\' y \'presupuesto alto\'"',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Filter,
      title: 'Por campaña',
      description: 'Identifica de qué fuente vienen tus mejores leads',
      example: '"📊 Lead desde Facebook Ads - Campaña: Descuento20"',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const platforms = [
    { name: 'WhatsApp', icon: '💬', popular: true },
    { name: 'Telegram', icon: '📱', popular: false },
    { name: 'SMS', icon: '📱', popular: false },
    { name: 'Email', icon: '📧', popular: false },
    { name: 'Slack', icon: '💼', popular: false }
  ]

  return (
    <section id="alertas" className="section-padding bg-gradient-to-br from-accent-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
            <Bell className="w-4 h-4 mr-2" />
            Alertas Inteligentes
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Notificaciones que importan 🔔
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Configura mensajes personalizados según el tipo de lead, valor, ubicación o cualquier criterio que definas.
          </p>
        </motion.div>

        {/* Alert Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {alertTypes.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${alert.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <alert.icon className={`w-6 h-6 ${alert.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{alert.title}</h3>
                  <p className="text-gray-600 mb-4">{alert.description}</p>
                  
                  {/* Example notification */}
                  <div className="bg-gray-50 border-l-4 border-primary-500 p-3 rounded-r-lg">
                    <p className="text-sm text-gray-700 font-medium">Ejemplo:</p>
                    <p className="text-sm text-gray-600 italic">{alert.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Recibe alertas donde prefieras
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className={`relative px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                  platform.popular 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{platform.icon}</span>
                  <span className={`font-medium ${
                    platform.popular ? 'text-primary-700' : 'text-gray-700'
                  }`}>
                    {platform.name}
                  </span>
                </div>
                {platform.popular && (
                  <div className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-gray-600">
            <Smartphone className="w-4 h-4 inline mr-2" />
            O todos a la vez - tú decides la configuración
          </p>
        </motion.div>

        {/* Custom Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Personalización total
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: Settings,
                  title: 'Configuración flexible',
                  description: 'Define horarios, frecuencia y formato de las alertas'
                },
                {
                  icon: Zap,
                  title: 'Disparadores inteligentes',
                  description: 'Basados en palabras clave, valores, ubicación, hora del día'
                },
                {
                  icon: Filter,
                  title: 'Filtros avanzados',
                  description: 'Evita spam y recibe solo lo que realmente importa'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mock Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-3xl p-2 max-w-sm mx-auto">
              <div className="bg-white rounded-2xl p-4 h-96 overflow-hidden">
                <div className="text-center text-xs text-gray-500 mb-4">WhatsApp Business</div>
                
                {/* Mock notifications */}
                <div className="space-y-3">
                  {[
                    { time: '14:32', message: '🔥 Venta $2,500,000 - Cliente Premium!', type: 'high' },
                    { time: '14:28', message: '📍 Nuevo lead en Bogotá - Zona Norte', type: 'normal' },
                    { time: '14:15', message: '⭐ Lead VIP: Menciona "urgente"', type: 'vip' },
                    { time: '13:45', message: '📊 Lead desde Facebook Ads', type: 'normal' }
                  ].map((notification, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.3 }}
                      className={`p-3 rounded-lg text-xs ${
                        notification.type === 'high' 
                          ? 'bg-red-50 border-l-4 border-red-400'
                          : notification.type === 'vip'
                          ? 'bg-purple-50 border-l-4 border-purple-400'
                          : 'bg-blue-50 border-l-4 border-blue-400'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">ToxoLinko</span>
                        <span className="text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-gray-700">{notification.message}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg"
            >
              4
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
