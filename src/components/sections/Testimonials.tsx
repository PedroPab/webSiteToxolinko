'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  company: string
  role: string
  content: string
  rating: number
  delay?: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  company, 
  role, 
  content, 
  rating,
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="card hover:shadow-2xl"
  >
    <div className="relative">
      <Quote className="absolute top-0 left-0 w-8 h-8 text-primary-200 -translate-x-2 -translate-y-2" />
      
      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{content}"
      </p>
      
      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm font-medium text-primary-600">{company}</div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Mendez",
      company: "Tienda Virtual Plus",
      role: "CEO & Fundador",
      content: "Desde que usamos ToxoLinko no se nos pierde un solo lead. La venta llega al móvil en segundos y nuestro equipo puede responder inmediatamente. Hemos aumentado las conversiones un 40%.",
      rating: 5
    },
    {
      name: "María González",
      company: "Consultora Digital",
      role: "Directora de Marketing",
      content: "La configuración fue súper rápida y el soporte es excepcional. Pablo nos tuvo todo funcionando en menos de 48 horas. Ahora automatizamos todo sin perder el toque personal.",
      rating: 5
    },
    {
      name: "Andrés Ruiz",
      company: "Inmobiliaria Moderna",
      role: "Gerente Comercial",
      content: "Antes perdíamos leads porque no los veíamos a tiempo. Con ToxoLinko cada consulta llega al WhatsApp del equipo al instante. Es como tener un asistente 24/7.",
      rating: 5
    }
  ]

  const stats = [
    { number: "40%", label: "Aumento promedio en conversiones" },
    { number: "<72h", label: "Tiempo de implementación" },
    { number: "24/7", label: "Monitoreo continuo" },
    { number: "100%", label: "Satisfacción del cliente" }
  ]

  return (
    <section id="testimonios" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes 🗣️
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas como la tuya ya están automatizando sus leads y viendo resultados reales
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Resultados que hablan por sí solos
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white">
            <h4 className="text-xl font-semibold mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h4>
            <p className="text-primary-100 mb-6">
              Únete a empresas que ya confían en ToxoLinko para automatizar sus leads
            </p>
            
            {/* Trusted by logos (placeholder) */}
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-white/70 text-sm font-medium">Shopify Partners</div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white/70 text-sm font-medium">WooCommerce Experts</div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white/70 text-sm font-medium">Zapier Integration</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
