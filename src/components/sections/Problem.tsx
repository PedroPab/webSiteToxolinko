'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Clock, AlertTriangle, DollarSign } from 'lucide-react'

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Leads que se pierden',
      description: 'Sin respuesta rápida, tus leads se van a la competencia'
    },
    {
      icon: Clock,
      title: 'Copiar-pegar manual',
      description: 'Horas perdidas moviendo información entre plataformas'
    },
    {
      icon: AlertTriangle,
      title: 'Falta de seguimiento',
      description: 'No sabes qué pasa después de captar el lead'
    }
  ]

  return (
    <section id="problema" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Te suena familiar? 😣
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los emprendedores pierden oportunidades todos los días por procesos manuales y falta de automatización
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500"
        >
          <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Cuánto dinero pierdes cada mes por no responder a tiempo?
          </h3>
          <p className="text-lg text-gray-600">
            La diferencia entre responder en 5 minutos vs 30 minutos puede ser 
            <span className="font-bold text-red-600"> hasta un 400% menos conversiones</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
