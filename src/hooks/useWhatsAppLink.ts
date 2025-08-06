'use client'

import { useCallback } from 'react'

export const useWhatsAppLink = () => {
    const openWhatsApp = useCallback((phone: string, message: string = '') => {
        const phoneNumber = phone.replace(/\D/g, '')
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }, [])

    const generateWhatsAppLink = useCallback((phone: string, message: string = '') => {
        const phoneNumber = phone.replace(/\D/g, '')
        const encodedMessage = encodeURIComponent(message)
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    }, [])

    return { openWhatsApp, generateWhatsAppLink }
}
