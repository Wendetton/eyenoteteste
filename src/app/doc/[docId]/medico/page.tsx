'use client'

import { useState } from 'react'
import { PacienteProvider } from '@/context/paciente-context'
import ListaPacientes from '@/components/ui/pacientes/ListaPacientes'
import ModalCriarPaciente from '@/components/ui/pacientes/ModalCriarPaciente'

export default function MedicoPage() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <PacienteProvider>
      {/* ...seu layout antigo... */}
      <button onClick={() => setModalOpen(true)}>Criar Paciente</button>
      <ListaPacientes />
      <ModalCriarPaciente isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </PacienteProvider>
  )
}
