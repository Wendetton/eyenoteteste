'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  useEffect(() => {
    const perfil = localStorage.getItem('perfil-eyenote')
    if (!perfil) {
      router.replace(`/doc/${params.id}/seletor-perfil`)
    } else if (perfil === 'medico') {
      router.replace(`/doc/${params.id}/medico`)
    } else {
      router.replace(`/doc/${params.id}/assistente`)
    }
  }, [params.id, router])

  return null
}
