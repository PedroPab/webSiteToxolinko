import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://toxolinko.com'),
  title: 'ToxoLinko | Automatiza tus leads y haz crecer tu negocio',
  description: 'Integra los leads de tu sitio, Shopify o funnel directamente a tu CRM y recibe alertas en tiempo real. Sin dolores de cabeza, con soporte cercano.',
  keywords: ['automatización de leads', 'integración Shopify CRM', 'ToxoLinko', 'Pablo Pedro', 'soporte WhatsApp', 'generación de leads'],
  openGraph: {
    title: 'ToxoLinko – Convierte cada clic en oportunidad de venta',
    description: 'Flujos personalizados, monitoreo continuo y asistencia dedicada, todo por una única cuota mensual.',
    images: ['/assets/og-toxolinko.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToxoLinko – Convierte cada clic en oportunidad de venta',
    description: 'Flujos personalizados, monitoreo continuo y asistencia dedicada, todo por una única cuota mensual.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
