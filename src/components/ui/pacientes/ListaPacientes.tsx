'use client'

import PacienteCard from './PacienteCard'

const pacientesMock = [
  { id: '1', nome: 'João Silva', ar: true, tono: false, criadoEm: '09:20' },
  { id: '2', nome: 'Maria Souza', ar: true, tono: true, criadoEm: '09:25' },
  { id: '3', nome: 'Carlos Lima', ar: false, tono: false, criadoEm: '09:30' }
]

export default function ListaPacientes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pacientesMock.map((p) => (
        <PacienteCard key={p.id} paciente={p} />
      ))}
    </div>
  )
}

