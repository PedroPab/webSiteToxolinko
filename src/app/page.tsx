import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Benefits } from '@/components/sections/Benefits'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Service } from '@/components/sections/Service'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Service />
    </main>
  )
}
