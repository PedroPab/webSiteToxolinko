'use client'

import { useState, useEffect } from 'react'

export const useScrollSpy = (ids: string[]) => {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100

            for (const id of ids) {
                const element = document.getElementById(id)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetBottom = offsetTop + element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveId(id)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [ids])

    return activeId
}
