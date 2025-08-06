'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sectionIds = ['inicio', 'problema', 'solucion', 'beneficios', 'como-funciona', 'servicio', 'precio', 'contacto']
  const activeSection = useScrollSpy(sectionIds)

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Problema', href: '#problema' },
    { name: 'Solución', href: '#solucion' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Servicio', href: '#servicio' },
    { name: 'Precio', href: '#precio' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg mr-3">
              T
            </div>
            <span className="text-xl font-bold text-gray-900">ToxoLinko</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                  activeSection === item.href.slice(1) 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+573054489598</span>
            </div>
            <CTAButton whatsapp={{ phone: '+573054489598', message: 'Hola, quiero automatizar mis leads con ToxoLinko' }}>
              Empezar Ahora
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left text-base font-medium transition-colors duration-200 hover:text-primary-600 py-2 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary-600 font-semibold'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+573054489598</span>
                  </div>
                  <CTAButton whatsapp={{ phone: '+573054489598', message: 'Hola, quiero automatizar mis leads con ToxoLinko' }}>
                    Empezar Ahora
                  </CTAButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
