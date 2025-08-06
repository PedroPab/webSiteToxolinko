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
      description: 'Conecta Toxolinko con todas tus herramientas y sistemas existentes',
      features: [
        'APIs REST ilimitadas',
        'Webhooks en tiempo real',
        'Integraciones nativas',
        'Conectores personalizados'
      ],
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      icon: Smartphone,
      title: 'App móvil incluida',
      description: 'Aplicación nativa para iOS y Android completamente funcional',
      features: [
        'Interfaz nativa optimizada',
        'Sincronización offline',
        'Notificaciones push',
        'Actualizaciones automáticas'
      ],
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      icon: Settings,
      title: 'Configuración total',
      description: 'Sistema completamente personalizable según tus necesidades',
      features: [
        'Campos personalizados',
        'Reglas de negocio flexibles',
        'Flujos de trabajo configurables',
        'Interfaz adaptable'
      ],
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics completos',
      description: 'Dashboards y reportes avanzados para tomar decisiones',
      features: [
        'Dashboards interactivos',
        'Reportes automáticos',
        'Métricas en tiempo real',
        'Exportación de datos'
      ],
      bgColor: 'bg-orange-100',
      color: 'text-orange-600'
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
            Servicio completo
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Todo lo que necesitas, <br />
            <span className="text-primary-600">sin sorpresas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toxolinko incluye absolutamente todo lo que necesitas para gestionar tus contaminantes. 
            Sin costos ocultos, sin módulos adicionales, sin limitaciones.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            {deliverables.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center bg-white rounded-lg p-4 shadow-sm"
                >
                  <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                </motion.div>
              );
            })}
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
