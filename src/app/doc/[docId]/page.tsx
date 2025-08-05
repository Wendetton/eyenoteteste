'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { docId: string } }) {
  const router = useRouter()

  useEffect(() => {
    const perfil = localStorage.getItem('perfil-eyenote')
    if (!perfil) {
      router.replace(`/doc/${params.docId}/seletor-perfil`)
    } else if (perfil === 'medico') {
      router.replace(`/doc/${params.docId}/medico`)
    } else {
      router.replace(`/doc/${params.docId}/assistente`)
    }
  }, [params.docId, router])

  return null
}
