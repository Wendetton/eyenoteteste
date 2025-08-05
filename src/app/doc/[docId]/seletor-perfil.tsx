'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SeletorPerfil() {
  const router = useRouter()
  const [perfil, setPerfil] = useState<string | null>(null)

  useEffect(() => {
    if (perfil) {
      localStorage.setItem('perfil-eyenote', perfil)
      if (perfil === 'medico') {
        router.push('medico')
      } else {
        router.push('assistente')
      }
    }
  }, [perfil, router])

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-xl font-bold">Escolha seu perfil</h1>
      <div className="flex gap-6">
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold"
          onClick={() => setPerfil('medico')}
        >
          Médico
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold"
          onClick={() => setPerfil('assistente')}
        >
          Assistente
        </button>
      </div>
    </div>
  )
}
