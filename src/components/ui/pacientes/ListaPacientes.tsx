'use client'

import PacienteCard from '@/components/ui/pacientes/PacienteCard'
import { usePacienteContext } from '@/context/paciente-context'

export default function ListaPacientes() {
  const { pacientes } = usePacienteContext()

  if (pacientes.length === 0) {
    return <p className="text-gray-500">Nenhum paciente cadastrado.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pacientes.map(p => (
        <PacienteCard key={p.id} paciente={p} />
      ))}
    </div>
  )
}

