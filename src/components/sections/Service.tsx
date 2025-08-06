'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Link2, 
  Smartphone, 
  Settings, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  Infinity
} from 'lucide-react'

export const Service: React.FC = () => {
  const services = [
    {
      icon: Link2,
      title: 'Integración ilimitada',
      description: 'Conectamos todos tus formularios, tiendas y funnels sin límite',
      features: [
        'Shopify, WooCommerce, sitios propios',
        'Formularios de contacto y landing pages', 
        'Funnels de venta y lead magnets',
        'Integraciones personalizadas'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Settings,
      title: 'Flujos 100% personalizados',
      description: 'Configuramos todo según las necesidades específicas de tu negocio',
      features: [
        'Validación y limpieza de datos automática',
        'Enrutamiento inteligente de leads',
        'Campos personalizados y etiquetado',
        'Reglas de negocio específicas'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Smartphone,
      title: 'Alertas inteligentes',
      description: 'Notificaciones instantáneas configuradas exactamente como las necesitas',
      features: [
        'WhatsApp, Telegram, SMS, Email',
        'Filtros por valor, ciudad, campaña',
        'Horarios y frecuencia personalizados',
        'Plantillas de mensaje dinámicas'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BarChart3,
      title: 'Monitoreo continuo',
      description: 'Supervisión 24/7 con corrección proactiva de problemas',
      features: [
        'Monitoreo de uptime y performance',
        'Alertas automáticas de fallos',
        'Corrección automática de errores',
        'Reportes mensuales detallados'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const deliverables = [
    { icon: CheckCircle, text: 'Sistema funcionando completamente' },
    { icon: Settings, text: 'Configuración personalizada documentada' },
    { icon: Shield, text: 'Monitoreo y alertas operativas' },
    { icon: Zap, text: 'Flujos de prueba validados' },
  ]

  return (
    <section id="servicio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Propuesta de Servicio
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Todo lo que incluye ToxoLinko 🛠️
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No solo conectamos tus plataformas, te entregamos un sistema completo 
            funcionando y optimizado para tu negocio específico.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Lo que recibes al contratar
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center bg-white rounded-lg p-4 shadow-sm"
              >
                <item.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <p className="text-gray-700 font-medium text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unlimited Changes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white text-center"
        >
          <div className="flex justify-center mb-4">
            <Infinity className="w-16 h-16 text-white animate-pulse" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">
            Cambios y correcciones ilimitados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Cambios de configuración</h4>
              <p className="text-primary-100 text-sm">
                Nuevos campos, reglas, filtros, integraciones
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Correcciones técnicas</h4>
              <p className="text-primary-100 text-sm">
                Bugs, optimizaciones, ajustes de rendimiento
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Nuevas funcionalidades</h4>
              <p className="text-primary-100 text-sm">
                Reportes, dashboards, automatizaciones adicionales
              </p>
            </div>
          </div>
          
          <div className="inline-block bg-white/20 rounded-lg p-4">
            <p className="text-sm">
              <strong>Todo incluido en tu cuota mensual</strong><br />
              Sin costos adicionales, sin límites, sin sorpresas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
