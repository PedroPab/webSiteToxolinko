'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  whatsapp?: {
    phone: string
    message: string
  }
  className?: string
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  whatsapp,
  className = ''
}) => {
  const { openWhatsApp } = useWhatsAppLink()

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'text-white bg-primary-600 border border-transparent hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary: 'text-primary-700 bg-white border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const handleClick = () => {
    if (whatsapp) {
      openWhatsApp(whatsapp.phone, whatsapp.message)
    } else if (onClick) {
      onClick()
    }
  }

  if (href && !whatsapp) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}
