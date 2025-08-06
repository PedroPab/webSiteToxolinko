'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Mail, Phone, ArrowUp } from 'lucide-react'
import { CTAButton } from '../common/CTAButton'

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Precio', href: '#precio' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    ToxoLinko
                  </span>
                </h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  Convierte cada clic en una oportunidad de venta. Automatiza tus leads 
                  y haz crecer tu negocio sin complicaciones técnicas.
                </p>
                
                {/* CTA in Footer */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton
                    whatsapp={{
                      phone: "+57000000000",
                      message: "¡Hola! Quiero automatizar mis leads con ToxoLinko"
                    }}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Empezar ahora
                  </CTAButton>
                  <CTAButton
                    variant="secondary"
                    href="#agenda"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamada gratis
                  </CTAButton>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">+57 (000) 000-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">hola@toxolinko.com</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    Lun-Sáb: 9:00 AM - 6:00 PM<br />
                    Tiempo de respuesta: ≤ 4h hábiles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-padding py-6">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2025 ToxoLinko. Todos los derechos reservados.
                </p>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Aviso de privacidad
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Términos de servicio
                  </a>
                </div>
              </div>

              {/* Back to top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">Volver arriba</span>
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Note */}
      <div className="bg-gray-950 py-3">
        <div className="container-custom text-center">
          <p className="text-xs text-gray-500">
            ToxoLinko es una marca en proceso de registro. Desarrollado con ❤️ por Pablo/Pedro.
          </p>
        </div>
      </div>
    </footer>
  )
}
